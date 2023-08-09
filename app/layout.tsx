import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navigation from "@/components/navbar";
import ActiveSectionContextProvider from "./context/active-section-context";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Justin's Portfolio",
    description: "Justin kim is a full stack developer who is passionate about web development. He graduated from Seneca College studying computer science and is looking for a full time position.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className="scroll-smooth "
        >
            <body
                className={`${inter.className} bg-gray-50 text-gray-00 transition-all background 
                overflow-y-scroll no-scrollbar`}
            >
                <ActiveSectionContextProvider>
                    <Navigation />
                    {children}
                    <Analytics/>
                </ActiveSectionContextProvider>
            </body>
        </html>
    );
}
