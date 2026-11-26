import { NextResponse, type NextRequest } from "next/server";
import { siteConfig } from "@/lib/site-config";
import {
    getCachedRedirectIndex,
    resolveSitemapRedirect,
} from "@/lib/sitemap-redirects";

export async function proxy(request: NextRequest) {
    if (request.method !== "GET" && request.method !== "HEAD") {
        return NextResponse.next();
    }

    const index = await getCachedRedirectIndex(siteConfig.externalSitemaps);
    const destination = resolveSitemapRedirect(
        request.nextUrl.pathname,
        request.nextUrl.search,
        index
    );

    if (destination) {
        const response = NextResponse.redirect(destination, 308);
        response.headers.set(
            "Cache-Control",
            "public, max-age=300, s-maxage=300, stale-while-revalidate=60"
        );
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/blog", "/blog/:path*", "/climbing", "/climbing/:path*"],
};
