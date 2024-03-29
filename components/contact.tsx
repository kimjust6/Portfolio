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
            className="scroll-m-28 flex flex-col items-center w-screen min-h-[40em] sm:min-h-[48em] text-center "
        >
            <div ref={ref}>
                <SectionHeading>CONTACT ME</SectionHeading>
            </div>

            <motion.p
                className="text-gray-700 text-sm px-4 mt-2 dark:text-gray-400"
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
                    className="rounded-lg border h-10 px-4 shadow-md shadow-gray-300 bg-gray-50 disabled:bg-gray-100 disabled:opacity-70 dark:bg-gray-700 dark:shadow-none dark:border-gray-600"
                    placeholder="Your Email"
                    required
                    maxLength={100}
                ></input>
                <textarea
                    disabled={emailSent}
                    required
                    name="senderMessage"
                    className="rounded-lg h-80 border p-4 shadow-md shadow-gray-300 bg-gray-50 disabled:bg-gray-100 disabled:opacity-70 dark:bg-gray-700 dark:shadow-none dark:border-gray-600"
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
