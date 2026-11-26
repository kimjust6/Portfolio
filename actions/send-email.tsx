"use server";

import getErrorHandler from "@/components/utils/errorHandler";
import { sendContactEmail } from "@/lib/mail";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 320;
const MAX_MESSAGE_LENGTH = 5000;

function validateContactInput(email: unknown, message: unknown): string | null {
    if (typeof email !== "string" || !email.trim()) {
        return "Please provide an email address.";
    }
    if (email.trim().length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email.trim())) {
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

const sendEmail = async (email: string, message: string) => {
    const validationError = validateContactInput(email, message);
    if (validationError) {
        return { error: validationError };
    }

    try {
        await sendContactEmail({
            replyTo: email.trim(),
            text: message.trim(),
        });
    } catch (error: unknown) {
        return {
            error: getErrorHandler(error),
        };
    }
};

export default sendEmail;
