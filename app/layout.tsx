import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavBar from "@/components/navbar";
import Intro from "@/components/intro";
import About from "@/components/about";
import Divider from "@/components/divider";
import Projects from "@/components/projects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Justin's Portfolio",
    description: "Justin is a full stack developer who is passionate about web development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-gray-50 text-gray-00 transition-all background overflow-y-scroll no-scrollbar`}
            >
                <NavBar />
                <Intro />
                <Divider />
                <About />
                <Divider />
                <Projects />
                <Divider />
                {children}
            </body>
        </html>
    );
}
