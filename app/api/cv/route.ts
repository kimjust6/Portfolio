import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import crypto from "crypto";

export const dynamic = "force-dynamic";

function checkPassword(input: string, target: string): boolean {
    if (!input || !target) return false;
    const inputTrimmed = input.trim();
    const targetTrimmed = target.trim();
    if (inputTrimmed.length !== targetTrimmed.length) {
        return false;
    }
    const inputBuf = Buffer.from(inputTrimmed);
    const targetBuf = Buffer.from(targetTrimmed);
    return crypto.timingSafeEqual(inputBuf, targetBuf);
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => ({}));
        const { password } = body;

        const expectedPassword = process.env.CV_PASSWORD || "resume2026";

        if (!password || !checkPassword(password, expectedPassword)) {
            return NextResponse.json(
                { error: "Incorrect password. Please try again." },
                { status: 401 }
            );
        }

        const candidatePaths = [
            path.join(process.cwd(), "private", "Justin Kim Resume 2026.pdf"),
            path.join(process.cwd(), "public", "Justin Kim Resume 2026.pdf"),
        ];

        const filePath = candidatePaths.find((p) => fs.existsSync(p));

        if (!filePath) {
            return NextResponse.json(
                { error: "CV file could not be found on the server." },
                { status: 404 }
            );
        }

        const fileBuffer = fs.readFileSync(filePath);

        return new NextResponse(fileBuffer, {
            status: 200,
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="Justin Kim Resume 2026.pdf"',
                "Cache-Control": "private, no-cache, no-store, must-revalidate",
            },
        });
    } catch (err: unknown) {
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
