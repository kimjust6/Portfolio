"use server";

import getErrorHandler from "@/components/utils/errorHandler";
import { sendContactEmail, validateContactInput } from "@/lib/mail";
import { createRateLimiter, getClientIp } from "@/lib/rate-limit";
import { headers } from "next/headers";

const contactRateLimiter = createRateLimiter({
    windowMs: 60_000,
    maxRequests: 5,
});

const sendEmail = async (email: string, message: string) => {
    const reqHeaders = await headers();
    const { allowed } = contactRateLimiter(getClientIp(reqHeaders));
    if (!allowed) {
        return { error: "Too many requests. Please try again later." };
    }

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
