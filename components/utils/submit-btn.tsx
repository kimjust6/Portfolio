import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

import { useFormStatus } from "react-dom";

function SubmitBtn({ emailSent }: { emailSent: boolean }) {
    const { pending } = useFormStatus();
    return (
        <motion.button
            disabled={emailSent || pending}
            className="button_primary group mt-2"
            whileHover={{ scale: emailSent || pending ? 1 : 1.04 }}
            whileTap={{ scale: emailSent || pending ? 1 : 0.97 }}
        >
            {emailSent ? (
                <>
                    Email Sent! <FcCheckmark />
                </>
            ) : pending ? (
                <>
                    Sending...
                    <AiOutlineLoading className="animate-spin" />
                </>
            ) : (
                <>
                    Send Email
                    <FaPaperPlane
                        className={
                            pending || emailSent
                                ? ""
                                : "transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        }
                    />
                </>
            )}
        </motion.button>
    );
}

export default SubmitBtn;
