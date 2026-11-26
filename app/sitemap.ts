import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { composeSitemaps, createXmlSitemapSource } from "@/lib/sitemap";

export const revalidate = 300;

const portfolioRootSource = async (): Promise<MetadataRoute.Sitemap> => [
    {
        url: `${siteConfig.url}/`,
        changeFrequency: "monthly",
        priority: 1,
    },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return composeSitemaps([
        portfolioRootSource,
        ...siteConfig.externalSitemaps.map((url) =>
            createXmlSitemapSource(url)
        ),
    ]);
}
