import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const siteMetadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: siteConfig.title,
    description: siteConfig.description,
    applicationName: siteConfig.name,
    authors: [{ url: siteConfig.author.url, name: siteConfig.author.name }],
    generator: "Next.js",
    alternates: {
        canonical: "/",
    },
    keywords: [
        "Justin Kim",
        "Portfolio",
        "Web Developer",
        "Full Stack Developer",
        "Dayforce",
        "Dayforce Canada",
        "Backend Developer",
        "Seneca College",
        "Yaksa",
        "Verndale",
        "Verndale Canada",
        "Partech",
        "Par",
    ],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noarchive: false,
            nosnippet: false,
            noimageindex: false,
            notranslate: false,
            indexifembedded: true,
        },
    },
    openGraph: {
        type: "website",
        title: siteConfig.author.name,
        description: siteConfig.description,
        siteName: siteConfig.title,
        locale: "en_US",
        alternateLocale: "en_GB",
        url: `${siteConfig.url}/`,
        countryName: "Canada",
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
    },
};

export const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    jobTitle: siteConfig.author.jobTitle,
    sameAs: [...siteConfig.socialLinks],
};
