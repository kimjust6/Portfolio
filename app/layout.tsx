import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import Footer from "@/components/footer";
import Navigation from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import ActiveSectionContextProvider from "./context/active-section-context";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Justin Kim Full Stack Developer",
    description:
        "Justin Kim is a full stack developer who is passionate about web development. He graduated from Seneca College studying computer science and is looking for a full time position.",
    applicationName: "Justin Kim's Portfolio",
    authors: [{ url: "", name: "Justin Kim" }],
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
