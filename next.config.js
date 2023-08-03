/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        protocols: ["https"],
        remotePatterns: [{ hostname: "i.imgur.com" }],
    },
};

module.exports = nextConfig;
