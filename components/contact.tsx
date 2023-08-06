"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./utils/section-heading";
import { useInViewSettings } from "@/lib/data";
import { motion } from "framer-motion";
import getErrorMessage from "@/components/utils/errorHandler";
import SubmitBtn from "./utils/submit-btn";
import sendEmail from "@/actions/send-email";

const Contact = () => {
    // function sleep(ms: number) {
    //     return new Promise((resolve) => setTimeout(resolve, ms));
    // }
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    const [emailSent, setEmailSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("Contact");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            id="contact"
            className="scroll-m-28 flex flex-col items-center w-screen min-h-[40em] text-center "
        >
            <div ref={ref}>
                <SectionHeading>Contact Me</SectionHeading>
            </div>

            <motion.p
                className="text-gray-700 text-sm px-4 mt-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true }}
            >
                Contact me directly at{" "}
                <a
                    className="text-indigo-600 underline font-semibold"
                    href="mailto:kimjust6@gmail.com"
                >
                    kimjust6@gmail.com
                </a>{" "}
                or through the form below.
            </motion.p>
            <motion.form
                action={async (formData) => {
                    try {
                        // await sleep(1000);
                        await sendEmail(
                            formData.get("senderEmail")?.toString() ?? "",
                            formData.get("senderMessage")?.toString() ?? ""
                        );
                    } catch (error) {
                        setErrorMessage(getErrorMessage(error));
                    }
                    setEmailSent(true);
                }}
                className="mt-10 flex flex-col gap-4 sm:gap-4 min-w-[min(100%,38rem)] px-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {errorMessage && <p className="text-red-500">Error: {errorMessage}</p>}
                <input
                    disabled={emailSent}
                    type="email"
                    name="senderEmail"
                    className="rounded-lg border h-10 px-4 shadow-md shadow-gray-300 bg-gray-50 disabled:bg-gray-100 disabled:opacity-70"
                    placeholder="Your Email"
                    required
                    maxLength={100}
                ></input>
                <textarea
                    disabled={emailSent}
                    required
                    name="senderMessage"
                    className="rounded-lg h-52 border p-4 shadow-md shadow-gray-300 bg-gray-50 disabled:bg-gray-100 disabled:opacity-70"
                    placeholder="Your Message"
                    maxLength={1000}
                ></textarea>
                <div className="flex justify-end">
                    <SubmitBtn emailSent={emailSent} />
                </div>
            </motion.form>
        </section>
    );
};

export default Contact;
