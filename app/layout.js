// "use client";

import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
// import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Justin's Portfolio",
    description: "Justin's Portfolio Website with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <AnimatePresence> */}
                <body className={inter.className}>
                    <Navbar></Navbar>
                    {children}
                </body>
            {/* </AnimatePresence> */}
        </html>
    );
}
