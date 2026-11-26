import { parseSitemapXml } from "./sitemap.ts";

const DEFAULT_CACHE_TTL_MS = 5 * 60 * 1000;
const FETCH_TIMEOUT_MS = 3000;

export interface SitemapRedirectIndex {
    exactByPath: Map<string, string>;
    bySlugPrefix: Map<string, string>;
    bySectionAndId: Map<string, string>;
    fallbackOrigin: string | null;
}

function normalizePath(pathname: string): string {
    const collapsed = pathname.replace(/\/+/g, "/");
    if (collapsed.length > 1 && collapsed.endsWith("/")) {
        return collapsed.slice(0, -1);
    }
    return collapsed;
}

function mergeDestinationWithSearch(
    destination: string,
    search: string
): string {
    if (!search) return destination;

    const incoming = new URLSearchParams(search);
    incoming.delete("__flash");
    if (incoming.size === 0) {
        return destination;
    }

    const target = new URL(destination);
    for (const [key, value] of incoming.entries()) {
        target.searchParams.append(key, value);
    }
    return target.toString();
}

export function buildRedirectIndex(
    urls: readonly string[]
): SitemapRedirectIndex {
    const exactByPath = new Map<string, string>();
    const bySlugPrefix = new Map<string, string>();
    const bySectionAndId = new Map<string, string>();
    let fallbackOrigin: string | null = null;

    for (const rawUrl of urls) {
        let parsed: URL;
        try {
            parsed = new URL(rawUrl);
        } catch {
            continue;
        }

        if (!fallbackOrigin) {
            fallbackOrigin = parsed.origin;
        }

        const path = normalizePath(parsed.pathname);
        const canonical = `${parsed.origin}${path}${parsed.search}`;

        if (!exactByPath.has(path)) {
            exactByPath.set(path, canonical);
        }

        const segments = path.split("/").filter(Boolean);
        if (segments.length >= 3) {
            const slugPrefix = `/${segments.slice(0, -1).join("/")}`;
            if (!bySlugPrefix.has(slugPrefix)) {
                bySlugPrefix.set(slugPrefix, canonical);
            }

            const section = segments[0];
            const id = segments[segments.length - 1];
            const sectionIdKey = `${section}:${id}`;
            if (!bySectionAndId.has(sectionIdKey)) {
                bySectionAndId.set(sectionIdKey, canonical);
            }
        }
    }

    return {
        exactByPath,
        bySlugPrefix,
        bySectionAndId,
        fallbackOrigin,
    };
}

export function resolveSitemapRedirect(
    pathname: string,
    search: string,
    index: SitemapRedirectIndex
): string | null {
    const normalizedPath = normalizePath(pathname);

    const exact = index.exactByPath.get(normalizedPath);
    if (exact) {
        return mergeDestinationWithSearch(exact, search);
    }

    const byPrefix = index.bySlugPrefix.get(normalizedPath);
    if (byPrefix) {
        return mergeDestinationWithSearch(byPrefix, search);
    }

    const segments = normalizedPath.split("/").filter(Boolean);
    if (segments.length >= 3) {
        const sectionIdKey = `${segments[0]}:${segments[segments.length - 1]}`;
        const byId = index.bySectionAndId.get(sectionIdKey);
        if (byId) {
            return mergeDestinationWithSearch(byId, search);
        }
    }

    if (index.fallbackOrigin) {
        return mergeDestinationWithSearch(
            `${index.fallbackOrigin}${normalizedPath}`,
            search
        );
    }

    return null;
}

interface CachedIndex {
    expiresAt: number;
    index: SitemapRedirectIndex;
}

let cache: CachedIndex | null = null;
let inflightRefresh: Promise<SitemapRedirectIndex> | null = null;

export function resetRedirectCache(): void {
    cache = null;
    inflightRefresh = null;
}

async function fetchExternalSitemapUrls(
    sitemapUrls: readonly string[]
): Promise<string[]> {
    const results = await Promise.all(
        sitemapUrls.map(async (url) => {
            try {
                const response = await fetch(url, {
                    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
                    cache: "no-store",
                });
                if (!response.ok) {
                    return [];
                }
                const xml = await response.text();
                return parseSitemapXml(xml).map((entry) => entry.url);
            } catch {
                return [];
            }
        })
    );

    return results.flat();
}

function defaultFallbackIndex(
    sitemapUrls: readonly string[]
): SitemapRedirectIndex {
    let fallbackOrigin: string | null = null;
    for (const url of sitemapUrls) {
        try {
            fallbackOrigin = new URL(url).origin;
            break;
        } catch {
            continue;
        }
    }

    return {
        exactByPath: new Map(),
        bySlugPrefix: new Map(),
        bySectionAndId: new Map(),
        fallbackOrigin,
    };
}

export async function getCachedRedirectIndex(
    sitemapUrls: readonly string[],
    ttlMs = DEFAULT_CACHE_TTL_MS
): Promise<SitemapRedirectIndex> {
    const now = Date.now();
    if (cache && now < cache.expiresAt) {
        return cache.index;
    }

    if (!inflightRefresh) {
        inflightRefresh = fetchExternalSitemapUrls(sitemapUrls)
            .then((urls) => {
                if (urls.length === 0 && cache) {
                    cache = { index: cache.index, expiresAt: Date.now() + ttlMs };
                    return cache.index;
                }

                const index =
                    urls.length > 0
                        ? buildRedirectIndex(urls)
                        : defaultFallbackIndex(sitemapUrls);

                cache = { index, expiresAt: Date.now() + ttlMs };
                return index;
            })
            .finally(() => {
                inflightRefresh = null;
            });
    }

    return inflightRefresh;
}
