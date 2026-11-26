import { getCvFile, verifyCvPassword } from "@/lib/cv";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const cvRateLimiter = createRateLimiter({
    windowMs: 60_000,
    maxRequests: 10,
});

export async function POST(req: NextRequest) {
    const ip = getClientIp(req.headers);
    const { allowed, retryAfterSeconds } = cvRateLimiter(ip);
    if (!allowed) {
        return NextResponse.json(
            { error: "Too many attempts. Please try again later." },
            {
                status: 429,
                headers: { "Retry-After": String(retryAfterSeconds) },
            }
        );
    }

    try {
        const body = await req.json().catch(() => ({}));
        const { password } = body;

        if (!password || !verifyCvPassword(password)) {
            return NextResponse.json(
                { error: "Incorrect password. Please try again." },
                { status: 401 }
            );
        }

        const cv = await getCvFile();
        if (!cv) {
            return NextResponse.json(
                { error: "CV file could not be found on the server." },
                { status: 404 }
            );
        }

        return new NextResponse(new Uint8Array(cv.buffer), {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": `attachment; filename="${cv.filename}"`,
                "Cache-Control": "private, no-cache, no-store, must-revalidate",
            },
        });
    } catch (err: unknown) {
        console.error("CV download error:", err);
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again." },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        { error: "Method not allowed. Please submit the password via POST." },
        { status: 405 }
    );
}
