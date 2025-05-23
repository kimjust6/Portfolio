import "@/app/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import GlobalStyles from "@/components/globalStyles";
import Navigation from "@/components/navbar";
import { MetadataValues } from "@/lib/data";
import { Analytics } from "@vercel/analytics/react";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: MetadataValues.Title,
    description: MetadataValues.Description,
    applicationName: "Justin Kim's Portfolio",
    authors: [{ url: "", name: "Justin Kim" }],
    generator: "Next.js",
    keywords: [
        "Justin Kim",
        "Portfolio",
        "Web Developer",
        "Full Stack Developer",
        "Seneca College",
        "Yaksa",
        "Partech",
        "Par",
    ],
    robots: {
        googleBot: {
            index: true,
            follow: true,
            noarchive: false,
            nosnippet: false,
            noimageindex: false,
            notranslate: false,
            indexifembedded: true,
            nositelinkssearchbox: true,
        },
    },
    openGraph: {
        type: "website",
        determiner: "",
        title: "Justin Kim",
        description: MetadataValues.Description,
        siteName: MetadataValues.Title,
        locale: "en_US",
        alternateLocale: "en_GB",
        images: ["https://i.imgur.com/O3H6i8d.png"],
        url: "https://www.justink.dev/",
        countryName: "Canada",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.className} text-gray-00 background no-scrollbar dark:background-dark overflow-y-scroll transition-all dark:bg-gray-950 dark:bg-gradient-to-r dark:bg-auto dark:text-gray-50 dark:text-opacity-95`}
            >
                <GlobalStyles />
                <ActiveSectionContextProvider>
                    <ThemeContextProvider>
                        <Navigation />
                        {children}
                        <Analytics />
                        <Footer />
                    </ThemeContextProvider>
                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}
