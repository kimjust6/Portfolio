"use client";

import sendEmail from "@/actions/send-email";
import { useActiveSection } from "@/app/context/active-section-context";
import getErrorMessage from "@/components/utils/errorHandler";
import { useInViewSettings } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./utils/section-heading";
import SubmitBtn from "./utils/submit-btn";

const Contact = () => {
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    const [emailSent, setEmailSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const time = Date.now();
        return () => {
            if (inView && time - timeOfLastClick > 1000) {
                setActiveSection("Contact");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            id="contact"
            className="flex min-h-[40em] w-screen scroll-m-28 flex-col items-center text-center sm:min-h-[48em]"
        >
            <div ref={ref}>
                <SectionHeading>CONTACT ME</SectionHeading>
            </div>

            <motion.p
                className="mt-2 px-4 text-sm text-gray-700 dark:text-gray-400"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                viewport={{ once: true }}
            >
                Contact me directly at{" "}
                <a
                    className="font-semibold text-indigo-600 underline"
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
                className="mt-10 flex min-w-[min(100%,38rem)] flex-col gap-4 px-8 sm:gap-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {errorMessage && (
                    <p className="text-red-500">Error: {errorMessage}</p>
                )}
                <input
                    disabled={emailSent}
                    type="email"
                    name="senderEmail"
                    className="h-10 rounded-lg border border-gray-400 bg-gray-50 px-4 shadow-md shadow-gray-300 disabled:bg-gray-100 disabled:opacity-70 dark:border-gray-600 dark:bg-gray-700 dark:shadow-none"
                    placeholder="Your Email"
                    required
                    maxLength={100}
                ></input>
                <textarea
                    disabled={emailSent}
                    required
                    name="senderMessage"
                    className="h-80 rounded-lg border border-gray-400 bg-gray-50 p-4 shadow-md shadow-gray-300 disabled:bg-gray-100 disabled:opacity-70 dark:border-gray-600 dark:bg-gray-700 dark:shadow-none"
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
