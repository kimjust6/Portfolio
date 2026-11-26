import PocketBase from "pocketbase";
import type {
    TypedPocketBase,
    ZendeskTicketsResponse,
} from "@/lib/pocketbase-types";

export type TicketStore = (payload: unknown) => Promise<ZendeskTicketsResponse>;

let pbClient: TypedPocketBase | null = null;

function getPocketBaseClient(): TypedPocketBase {
    if (!pbClient) {
        pbClient = new PocketBase(
            process.env.PB_TYPEGEN_URL
        ) as TypedPocketBase;
    }
    return pbClient;
}

const pocketBaseTicketStore: TicketStore = async (payload) => {
    const pb = getPocketBaseClient();

    if (process.env.PB_TYPEGEN_EMAIL && process.env.PB_TYPEGEN_PASSWORD) {
        await pb.admins.authWithPassword(
            process.env.PB_TYPEGEN_EMAIL,
            process.env.PB_TYPEGEN_PASSWORD
        );
    }

    return pb.collection("zendesk_tickets").create<ZendeskTicketsResponse>({
        data: JSON.stringify(payload),
    });
};

export async function saveZendeskTicket(
    payload: unknown,
    store: TicketStore = pocketBaseTicketStore
): Promise<ZendeskTicketsResponse> {
    return store(payload);
}
