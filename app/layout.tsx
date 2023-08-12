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
    title: "Justin's Portfolio",
    description:
        "Justin kim is a full stack developer who is passionate about web development. He graduated from Seneca College studying computer science and is looking for a full time position.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className="scroll-smooth "
        >
            <body
                className={`${inter.className} bg-gray-50 text-gray-00 transition-all background 
                overflow-y-scroll no-scrollbar dark:bg-gray-950 dark:text-gray-50 
                dark:text-opacity-95 dark:bg-auto`}
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
