/* eslint-disable react/no-unescaped-entities */
"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { BsDownload, BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

const Intro = () => {
    const router = useRouter();
    const { ref, inView } = useInView({
        // threshold: 0.1,
        initialInView: true,
        rootMargin: "-30% 0% -70% 0%",
    });
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Home");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section id="home" className="scroll-m-28">
            <motion.div
                className="flex items-center justify-center"
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0, duration: 0.25 }}
            >
                <Image
                    ref={ref}
                    className="mt-24 rounded-xl border-4 border-zinc-100 shadow-sm shadow-zinc-800 sm:mt-36"
                    src="https://i.imgur.com/R4NkK6G.jpg"
                    width={200}
                    height={300}
                    alt="head shot"
                ></Image>
            </motion.div>
            <div className="flex w-full justify-center">
                <div className="max-w-xs text-center sm:max-w-2xl">
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.05,
                            duration: 0.1,
                        }}
                        className="my-10 font-sans text-2xl sm:text-3xl"
                    >
                        I'm{" "}
                        <span className="font-bold dark:text-yellow-400">
                            Justin
                        </span>
                        , a{" "}
                        <span className="font-bold dark:text-yellow-400">
                            Full Stack Developer{" "}
                        </span>{" "}
                        who is{" "}
                        <span className="italic dark:text-yellow-100">
                            passionate
                        </span>{" "}
                        about creating modern{" "}
                        <span className="italic dark:text-yellow-100">
                            user centered{" "}
                        </span>{" "}
                        web applications.
                    </motion.p>
                    <motion.div
                        className="flex flex-col items-center justify-center gap-3 sm:min-w-96 sm:flex-row sm:gap-4"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            delay: 0.1,
                            duration: 0.1,
                        }}
                    >
                        <motion.button
                            className="button_secondary group"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                                router.push("#contact");
                                setActiveSection("Contact");
                            }}
                        >
                            Contact Me{" "}
                            <BsEnvelope className="transition-all group-hover:translate-x-0.5" />
                        </motion.button>
                        <motion.a
                            href="/Justin Kim Resume 2023.pdf"
                            download
                            className="button_primary group"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Download CV{" "}
                            <BsDownload className="transition-all group-hover:translate-y-0.5" />
                        </motion.a>

                        <Link
                            href="https://www.linkedin.com/in/justin-kim6/"
                            target="_blank"
                        >
                            <motion.div
                                className="button_secondary transparent"
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="display">LinkedIn</span>
                                <BsLinkedin
                                    size={20}
                                    className="text-blue-800 dark:text-blue-500"
                                />
                            </motion.div>
                        </Link>
                        <Link
                            href="https://github.com/kimjust6"
                            target="_blank"
                        >
                            <motion.div
                                className="button_secondary transparent"
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="display">GitHub</span>
                                <BsGithub size={20} />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
