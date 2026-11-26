import { Resend } from "resend";

export type MailPayload = {
    from: string;
    to: string;
    subject: string;
    replyTo: string;
    text: string;
};

export type MailTransport = (payload: MailPayload) => Promise<void>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 320;
const MAX_MESSAGE_LENGTH = 5000;

export function validateContactInput(
    email: unknown,
    message: unknown
): string | null {
    if (typeof email !== "string" || !email.trim()) {
        return "Please provide an email address.";
    }
    if (
        email.trim().length > MAX_EMAIL_LENGTH ||
        !EMAIL_REGEX.test(email.trim())
    ) {
        return "Please provide a valid email address.";
    }
    if (typeof message !== "string" || !message.trim()) {
        return "Please provide a message.";
    }
    if (message.trim().length > MAX_MESSAGE_LENGTH) {
        return `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`;
    }
    return null;
}

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
