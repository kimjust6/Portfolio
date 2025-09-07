// import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

import sass from "sass-embedded"; // or "sass"

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ protocol: "https", hostname: "i.imgur.com" }],
    },
    reactStrictMode: false,
};

export default nextConfig;
