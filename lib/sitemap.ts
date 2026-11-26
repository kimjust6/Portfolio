import type { MetadataRoute } from "next";

export type SitemapSource = () => Promise<MetadataRoute.Sitemap>;

const VALID_CHANGE_FREQS = new Set([
    "always",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "yearly",
    "never",
] as const);

type ChangeFrequency = NonNullable<
    MetadataRoute.Sitemap[number]["changeFrequency"]
>;

const DEFAULT_FETCH_TIMEOUT_MS = 5000;
const DEFAULT_REVALIDATE_SECONDS = 300;

function extractTag(block: string, tag: string): string | undefined {
    const match = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`, "i"));
    return match?.[1]?.trim();
}

function unescapeXml(value: string): string {
    return value
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
}

export function parseSitemapXml(xml: string): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];
    const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/gi) ?? [];

    for (const block of urlBlocks) {
        const loc = extractTag(block, "loc");
        if (!loc) continue;

        const lastmod = extractTag(block, "lastmod");
        const changefreq = extractTag(block, "changefreq")?.toLowerCase();
        const priorityStr = extractTag(block, "priority");
        const priority = priorityStr ? Number.parseFloat(priorityStr) : NaN;

        const entry: MetadataRoute.Sitemap[number] = {
            url: unescapeXml(loc),
        };

        if (lastmod) {
            entry.lastModified = lastmod;
        }

        if (
            changefreq &&
            VALID_CHANGE_FREQS.has(changefreq as ChangeFrequency)
        ) {
            entry.changeFrequency = changefreq as ChangeFrequency;
        }

        if (!Number.isNaN(priority)) {
            entry.priority = priority;
        }

        entries.push(entry);
    }

    return entries;
}

export function createXmlSitemapSource(
    url: string,
    timeoutMs = DEFAULT_FETCH_TIMEOUT_MS
): SitemapSource {
    return async () => {
        try {
            const response = await fetch(url, {
                next: { revalidate: DEFAULT_REVALIDATE_SECONDS },
                signal: AbortSignal.timeout(timeoutMs),
            });

            if (!response.ok) {
                console.error(
                    `Failed to fetch sitemap from ${url}: ${response.status} ${response.statusText}`
                );
                return [];
            }

            const xml = await response.text();
            return parseSitemapXml(xml);
        } catch (error) {
            console.error(`Error fetching sitemap from ${url}:`, error);
            return [];
        }
    };
}

export async function composeSitemaps(
    sources: readonly SitemapSource[]
): Promise<MetadataRoute.Sitemap> {
    const results = await Promise.all(sources.map((source) => source()));
    return results.flat();
}
