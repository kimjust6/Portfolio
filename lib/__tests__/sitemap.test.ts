import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { composeSitemaps, parseSitemapXml } from "../sitemap.ts";
import {
    buildRedirectIndex,
    getCachedRedirectIndex,
    resetRedirectCache,
    resolveSitemapRedirect,
} from "../sitemap-redirects.ts";

describe("parseSitemapXml", () => {
    it("parses valid url entries with all fields", () => {
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url>
                    <loc>https://myblog.jkim.win/posts?a=1&amp;b=2</loc>
                    <lastmod>2026-11-04T14:29:31Z</lastmod>
                    <changefreq>weekly</changefreq>
                    <priority>0.80</priority>
                </url>
            </urlset>`;

        const entries = parseSitemapXml(xml);
        assert.equal(entries.length, 1);
        assert.deepEqual(entries[0], {
            url: "https://myblog.jkim.win/posts?a=1&b=2",
            lastModified: "2026-11-04T14:29:31Z",
            changeFrequency: "weekly",
            priority: 0.8,
        });
    });

    it("ignores invalid changefreq and missing loc", () => {
        const xml = `
            <urlset>
                <url><lastmod>2026-01-01</lastmod></url>
                <url><loc>https://example.com/</loc><changefreq>sometimes</changefreq></url>
            </urlset>`;

        const entries = parseSitemapXml(xml);
        assert.deepEqual(entries, [{ url: "https://example.com/" }]);
    });
});

describe("composeSitemaps", () => {
    it("merges sources and deduplicates by url", async () => {
        const result = await composeSitemaps([
            async () => [{ url: "https://www.jkim.win/", priority: 1 }],
            async () => [
                { url: "https://www.jkim.win/", priority: 0.5 },
                { url: "https://myblog.jkim.win/", priority: 0.8 },
            ],
        ]);

        assert.deepEqual(result, [
            { url: "https://www.jkim.win/", priority: 1 },
            { url: "https://myblog.jkim.win/", priority: 0.8 },
        ]);
    });
});

describe("resolveSitemapRedirect", () => {
    const index = buildRedirectIndex([
        "https://myblog.jkim.win/",
        "https://myblog.jkim.win/blog/posts",
        "https://myblog.jkim.win/climbing",
        "https://myblog.jkim.win/blog/posts/saying-goodbye-to-windows-windows-10-eol/1lksw632qx0uph5",
        "https://myblog.jkim.win/climbing/sending-orient-express/98hnmf7sw9ier8o",
        "https://myblog.jkim.win/climbing/logging-my-climbs-and-blogging-my-thoughts/7ec7h8bjow2ho62",
    ]);

    it("resolves exact paths and normalizes trailing slashes", () => {
        assert.equal(
            resolveSitemapRedirect("/blog/posts", "", index),
            "https://myblog.jkim.win/blog/posts"
        );
        assert.equal(
            resolveSitemapRedirect("/blog/posts/", "", index),
            "https://myblog.jkim.win/blog/posts"
        );
        assert.equal(
            resolveSitemapRedirect("/climbing", "", index),
            "https://myblog.jkim.win/climbing"
        );
    });

    it("resolves slug-only URLs without record ID", () => {
        assert.equal(
            resolveSitemapRedirect(
                "/blog/posts/saying-goodbye-to-windows-windows-10-eol",
                "",
                index
            ),
            "https://myblog.jkim.win/blog/posts/saying-goodbye-to-windows-windows-10-eol/1lksw632qx0uph5"
        );
        assert.equal(
            resolveSitemapRedirect(
                "/climbing/logging-my-climbs-and-blogging-my-thoughts",
                "",
                index
            ),
            "https://myblog.jkim.win/climbing/logging-my-climbs-and-blogging-my-thoughts/7ec7h8bjow2ho62"
        );
    });

    it("resolves renamed slugs by matching section and record ID", () => {
        assert.equal(
            resolveSitemapRedirect(
                "/climbing/orient-express-send-with-an-asterisk/98hnmf7sw9ier8o",
                "?__flash=",
                index
            ),
            "https://myblog.jkim.win/climbing/sending-orient-express/98hnmf7sw9ier8o"
        );
    });

    it("preserves search query params and strips __flash", () => {
        assert.equal(
            resolveSitemapRedirect(
                "/blog/posts",
                "?page=1&query=random+thoughts",
                index
            ),
            "https://myblog.jkim.win/blog/posts?page=1&query=random+thoughts"
        );
        assert.equal(
            resolveSitemapRedirect(
                "/blog/posts/saying-goodbye-to-windows-windows-10-eol/1lksw632qx0uph5",
                "?__flash=",
                index
            ),
            "https://myblog.jkim.win/blog/posts/saying-goodbye-to-windows-windows-10-eol/1lksw632qx0uph5"
        );
    });

    it("falls back to external origin for unmatched blog or climbing paths", () => {
        assert.equal(
            resolveSitemapRedirect("/blog", "", index),
            "https://myblog.jkim.win/blog"
        );
    });

    it("normalizes consecutive slashes and merges existing query params", () => {
        const indexWithQuery = buildRedirectIndex([
            "https://myblog.jkim.win/blog/posts?sort=desc",
        ]);
        assert.equal(
            resolveSitemapRedirect(
                "/blog//posts/",
                "?page=1&__flash=",
                indexWithQuery
            ),
            "https://myblog.jkim.win/blog/posts?sort=desc&page=1"
        );
    });
});

describe("getCachedRedirectIndex", () => {
    it("caches fetched sitemap entries and retains stale cache on refresh failure", async () => {
        resetRedirectCache();
        const originalFetch = globalThis.fetch;
        let callCount = 0;

        globalThis.fetch = (async () => {
            callCount += 1;
            if (callCount === 1) {
                return new Response(
                    `<urlset><url><loc>https://myblog.jkim.win/blog/posts</loc></url></urlset>`,
                    { status: 200 }
                );
            }
            return new Response("upstream error", { status: 500 });
        }) as typeof fetch;

        try {
            const first = await getCachedRedirectIndex(
                ["https://myblog.jkim.win/sitemap.xml"],
                60_000
            );
            assert.equal(
                first.exactByPath.get("/blog/posts"),
                "https://myblog.jkim.win/blog/posts"
            );

            // Within TTL: should not re-fetch
            const cached = await getCachedRedirectIndex(
                ["https://myblog.jkim.win/sitemap.xml"],
                60_000
            );
            assert.equal(callCount, 1);
            assert.equal(
                cached.exactByPath.get("/blog/posts"),
                "https://myblog.jkim.win/blog/posts"
            );

            // Force TTL expiration by priming with ttlMs = -1, then verify stale cache is retained on error
            resetRedirectCache();
            callCount = 0;
            await getCachedRedirectIndex(
                ["https://myblog.jkim.win/sitemap.xml"],
                -1
            );
            const stale = await getCachedRedirectIndex(
                ["https://myblog.jkim.win/sitemap.xml"],
                60_000
            );
            assert.equal(callCount, 2);
            assert.equal(
                stale.exactByPath.get("/blog/posts"),
                "https://myblog.jkim.win/blog/posts"
            );
        } finally {
            globalThis.fetch = originalFetch;
            resetRedirectCache();
        }
    });

    it("falls back to external origin when initial fetch fails", async () => {
        resetRedirectCache();
        const originalFetch = globalThis.fetch;
        globalThis.fetch = (async () => {
            throw new Error("network down");
        }) as typeof fetch;

        try {
            const index = await getCachedRedirectIndex(
                ["https://myblog.jkim.win/sitemap.xml"],
                60_000
            );
            assert.equal(
                resolveSitemapRedirect("/blog/posts", "", index),
                "https://myblog.jkim.win/blog/posts"
            );
        } finally {
            globalThis.fetch = originalFetch;
            resetRedirectCache();
        }
    });
});
