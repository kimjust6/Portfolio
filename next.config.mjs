// import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

import sass from "sass-embedded"; // or "sass"

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ protocol: "https", hostname: "i.imgur.com" }],
    },
    outputFileTracingIncludes: {
        "/api/cv": ["./private/**/*"],
    },
    async redirects() {
        return [
            {
                source: "/Justin%20Kim%20Resume%202026.pdf",
                destination: "/#home",
                permanent: false,
            },
            {
                source: "/Justin%20Kim%20Resume%202023.pdf",
                destination: "/#home",
                permanent: false,
            },
            {
                source: "/Justin%20Kim%20Resume%20OLD.pdf",
                destination: "/#home",
                permanent: false,
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/:path*",
                headers: [
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                ],
            },
        ];
    },
    reactStrictMode: true,
};

export default nextConfig;
