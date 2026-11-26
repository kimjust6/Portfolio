import "@/app/styles/globals.css";
import { personJsonLd, siteMetadata } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import ThemeContextProvider from "./context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
            </head>
            <body
                className={`${inter.className} text-gray-00 background no-scrollbar dark:background-dark dark:text-opacity-95 overflow-y-scroll transition-all dark:bg-gray-950 dark:bg-gradient-to-r dark:bg-auto dark:text-gray-50 relative`}
            >
                <Script id="theme-init" strategy="beforeInteractive">
                    {`
                    try {
                        document.documentElement.classList.toggle(
                        'dark',
                        localStorage.getItem('theme') === 'dark' ||
                        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
                        );
                    } catch (err) {
                        console.error('Theme initialization failed', err);
                    }
                    `}
                </Script>
                <div
                    className="absolute inset-0 z-0 pointer-events-none hidden dark:block"
                    style={{
                        backgroundColor: '#030712',
                        backgroundImage: `
                            radial-gradient(circle at 25% 25%, #151515 0.5px, transparent 1px),
                            radial-gradient(circle at 75% 75%, #0d0d0d 0.5px, transparent 1px)
                        `,
                        backgroundSize: '10px 10px',
                        imageRendering: 'pixelated',
                    }}
                />
                <div className="relative z-10">
                    <ThemeContextProvider>{children}</ThemeContextProvider>
                </div>
                <Analytics />
            </body>
        </html>
    );
}
