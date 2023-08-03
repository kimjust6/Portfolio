import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Justin's Portfolio",
    description: "Justin's Portfolio Website with Next.js",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    );
}
