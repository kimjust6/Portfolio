import crypto from "crypto";
import { saveZendeskTicket } from "@/lib/zendesk";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type ErrorWithMessage = { message?: string };

function isAuthorized(req: NextRequest): boolean {
    const secret = process.env.ZENDESK_WEBHOOK_SECRET;
    if (!secret) return true;

    const provided = req.headers.get("x-webhook-secret");
    if (!provided || provided.length !== secret.length) {
        return false;
    }

    return crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(secret));
}

export async function POST(req: NextRequest) {
    if (!isAuthorized(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { error: "Invalid JSON payload" },
            { status: 400 }
        );
    }

    try {
        const record = await saveZendeskTicket(body);
        return NextResponse.json(record, { status: 201 });
    } catch (err: unknown) {
        console.error("Failed to create Zendesk ticket:", err);
        const e = err as ErrorWithMessage;
        return NextResponse.json(
            { error: e?.message || "Failed to create Zendesk ticket" },
            { status: 500 }
        );
    }
}
