import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navigation from "@/components/utils/navbar";
import ActiveSectionContextProvider from "./context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Justin's Portfolio",
    description: "Justin is a full stack developer who is passionate about web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className="!scroll-smooth"
        >
            <body
                className={`${inter.className} bg-gray-50 text-gray-00 transition-all background 
                overflow-y-scroll no-scrollbar`}
            >
                <ActiveSectionContextProvider>
                    <Navigation />
                    {children}
                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}
