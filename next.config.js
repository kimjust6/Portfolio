import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.imgur.com",
            },
        ],
    },
};

module.exports = nextConfig;

if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
}
