import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import Footer from "@/components/footer";
import Navigation from "@/components/navbar";
import { MetadataValues } from "@/lib/data";
import { Analytics } from "@vercel/analytics/react";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: MetadataValues.Title,
    description:
        MetadataValues.Description,
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
        }
    },
    openGraph: {
        type: "website",
        determiner: '',
        title: "Justin Kim",
        description: MetadataValues.Description,
        siteName: MetadataValues.Title,
        locale: "en_US",
        alternateLocale:"en_GB",
        images: ["https://i.imgur.com/O3H6i8d.png","https://www.justink.dev/_next/image?url=https%3A%2F%2Fi.imgur.com%2FR4NkK6G.jpg&w=256&q=75"],
        url: "https://www.justink.dev/",
        countryName: "Canada",
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className="scroll-smooth "
        >
            <body
                className={`${inter.className} text-gray-00 transition-all background 
                overflow-y-scroll no-scrollbar dark:background-dark dark:bg-gray-950 dark:text-gray-50 
                dark:text-opacity-95 dark:bg-auto dark:bg-gradient-to-r `}
            >
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
