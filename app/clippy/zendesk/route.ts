import { NextRequest, NextResponse } from "next/server";
import PocketBase from "pocketbase";
import type {
    TypedPocketBase,
    ZendeskTicketsResponse,
} from "@/lib/pocketbase-types";

export const dynamic = "force-dynamic";

const pb = new PocketBase(process.env.PB_TYPEGEN_URL) as TypedPocketBase;

type error = { message?: string };

export async function POST(req: NextRequest) {
    try {
        if (process.env.PB_TYPEGEN_EMAIL && process.env.PB_TYPEGEN_PASSWORD) {
            await pb.admins.authWithPassword(
                process.env.PB_TYPEGEN_EMAIL,
                process.env.PB_TYPEGEN_PASSWORD
            );
        }

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
