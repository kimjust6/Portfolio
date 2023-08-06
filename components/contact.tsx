"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./utils/section-heading";
import { useInViewSettings } from "@/lib/data";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();

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
                className="mt-10 flex flex-col gap-4 sm:gap-4 min-w-[min(100%,38rem)] px-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <input
                    type="email"
                    className="rounded-lg border h-10 px-4 shadow-md shadow-gray-300"
                    placeholder="Your Email"
                ></input>
                <textarea
                    className="rounded-lg h-52 border p-4 shadow-md shadow-gray-300"
                    placeholder="Your Message"
                ></textarea>
                <div className="flex justify-end">
                    <motion.button
                        className="button_primary group mt-2"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Send{" "}
                        <FaPaperPlane className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </motion.button>
                </div>
            </motion.form>
        </section>
    );
};

export default Contact;
