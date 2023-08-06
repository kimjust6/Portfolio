"use server";

import getErrorHandler from "@/components/utils/errorHandler";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);



const sendEmail = async (email: string, message: string) => {

    try {
        await resend.emails.send({
            from: "Justin's Portfolio <onboarding@resend.dev>",
            to: "mletemps@hotmail.com",
            subject: "Message from Portfolio",
            reply_to: email,
            text: message,
        });
    } catch (error: unknown) {
        return {
            error: getErrorHandler(error),
        };
    }
};
export default sendEmail;
