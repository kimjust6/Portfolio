import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "@/components/navbar";
import Intro from "@/components/intro";
import About from "@/components/about";
import Divider from "@/components/divider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Justin's Portfolio",
    description: "Justin is a full stack developer who is passionate about web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-50 text-gray-950 transition-all background`}>
                <NavBar/>
                <Intro/>
                <Divider/>
                <About/>
                <Divider/>
                {children}
            </body>
        </html>
    );
}
