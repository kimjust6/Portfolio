import { Resend } from "resend";

export type MailPayload = {
    from: string;
    to: string;
    subject: string;
    replyTo: string;
    text: string;
};

export type MailTransport = (payload: MailPayload) => Promise<void>;

const MAIL_CONFIG = {
    from: "Justin Kim's Portfolio <onboarding@resend.dev>",
    to: process.env.CONTACT_RECIPIENT_EMAIL || "mletemps@hotmail.com",
    subject: "Message from Portfolio",
} as const;

let resendClient: Resend | null = null;

function getResendClient(): Resend {
    if (!resendClient) {
        resendClient = new Resend(process.env.RESEND_API_KEY);
    }
    return resendClient;
}

const resendTransport: MailTransport = async (payload) => {
    const resend = getResendClient();
    await resend.emails.send(payload);
};

export async function sendContactEmail(
    { replyTo, text }: { replyTo: string; text: string },
    transport: MailTransport = resendTransport
) {
    await transport({
        from: MAIL_CONFIG.from,
        to: MAIL_CONFIG.to,
        subject: MAIL_CONFIG.subject,
        replyTo,
        text,
    });
}
