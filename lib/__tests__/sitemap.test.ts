import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { parseSitemapXml } from "../sitemap.ts";

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
