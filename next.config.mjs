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
            // Direct redirects from sitemap.xml for slug-only and renamed URLs
            {
                source: "/blog/posts/third-time-is-the-charm",
                destination:
                    "https://myblog.jkim.win/blog/posts/third-time-is-the-charm/bqorntni0assytp",
                permanent: true,
            },
            {
                source: "/blog/posts/second-blog-post-test",
                destination:
                    "https://myblog.jkim.win/blog/posts/second-blog-post-test/31bgn4jrbfehco0",
                permanent: true,
            },
            {
                source: "/blog/posts/zendesk-discord-chatbot-using-webhooks",
                destination:
                    "https://myblog.jkim.win/blog/posts/zendesk-discord-chatbot-using-webhooks/wbp0l55sziudugc",
                permanent: true,
            },
            {
                source: "/blog/posts/my-first-post-ever",
                destination:
                    "https://myblog.jkim.win/blog/posts/my-first-post-ever/0x1ve7oebxjf5f3",
                permanent: true,
            },
            {
                source: "/blog/posts/automating-24-7-monitoring-for-a-weekend",
                destination:
                    "https://myblog.jkim.win/blog/posts/automating-24-7-monitoring-for-a-weekend/11srfwddkydjmh0",
                permanent: true,
            },
            {
                source: "/blog/posts/saying-goodbye-to-windows-windows-10-eol",
                destination:
                    "https://myblog.jkim.win/blog/posts/saying-goodbye-to-windows-windows-10-eol/1lksw632qx0uph5",
                permanent: true,
            },
            {
                source: "/blog/posts/the-case-of-the-free-products",
                destination:
                    "https://myblog.jkim.win/blog/posts/the-case-of-the-free-products/cknv4b0xxavpxz1",
                permanent: true,
            },
            {
                source: "/blog/posts/a-problem-with-taxes",
                destination:
                    "https://myblog.jkim.win/blog/posts/a-problem-with-taxes/vjx463ugavngj04",
                permanent: true,
            },
            {
                source: "/blog/posts/automating-my-plex-server",
                destination:
                    "https://myblog.jkim.win/blog/posts/automating-my-plex-server/zxx69rwuafewv0g",
                permanent: true,
            },
            {
                source: "/climbing/orient-express-send-with-an-asterisk/98hnmf7sw9ier8o",
                destination:
                    "https://myblog.jkim.win/climbing/sending-orient-express/98hnmf7sw9ier8o",
                permanent: true,
            },
            {
                source: "/climbing/sending-orient-express",
                destination:
                    "https://myblog.jkim.win/climbing/sending-orient-express/98hnmf7sw9ier8o",
                permanent: true,
            },
            {
                source: "/climbing/orient-express-my-first-project-at-the-glen",
                destination:
                    "https://myblog.jkim.win/climbing/orient-express-my-first-project-at-the-glen/y8rwxxhly6i7bwt",
                permanent: true,
            },
            {
                source: "/climbing/logging-my-climbs-and-blogging-my-thoughts",
                destination:
                    "https://myblog.jkim.win/climbing/logging-my-climbs-and-blogging-my-thoughts/7ec7h8bjow2ho62",
                permanent: true,
            },
            // Catch-all redirects to myblog.jkim.win (preserves query strings)
            {
                source: "/blog",
                destination: "https://myblog.jkim.win/blog",
                permanent: true,
            },
            {
                source: "/blog/:path*",
                destination: "https://myblog.jkim.win/blog/:path*",
                permanent: true,
            },
            {
                source: "/climbing",
                destination: "https://myblog.jkim.win/climbing",
                permanent: true,
            },
            {
                source: "/climbing/:path*",
                destination: "https://myblog.jkim.win/climbing/:path*",
                permanent: true,
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
