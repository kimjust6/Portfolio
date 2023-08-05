/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    images: {
        protocols: ["https"],
        remotePatterns: [{ hostname: "i.imgur.com" }],
    },
};

module.exports = nextConfig;
