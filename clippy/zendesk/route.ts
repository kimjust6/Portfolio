import { NextRequest, NextResponse } from "next/server";
import PocketBase from "pocketbase";
import type {
    TypedPocketBase,
    ZendeskTicketsResponse,
} from "@/lib/pocketbase-types";

const pb = new PocketBase(process.env.PB_TYPEGEN_URL) as TypedPocketBase;

type error = { message?: string };

// If you need admin auth (for server-to-server writes)
await pb.admins.authWithPassword(
    process.env.PB_TYPEGEN_EMAIL!,
    process.env.PB_TYPEGEN_PASSWORD!
);

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Store entire request body as string
        const record = await pb
            .collection("zendesk_tickets")
            .create<ZendeskTicketsResponse>({
                data: JSON.stringify(body),
            });

        return NextResponse.json(JSON.stringify(record), { status: 201 });
    } catch (err: unknown) {
        const e = err as error;
        return NextResponse.json(
            { error: e?.message || "Failed to create Zendesk ticket" },
            { status: 500 }
        );
    }
}
