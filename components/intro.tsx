/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsDownload, BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";
import { useActiveSection } from "@/app/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

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
        <section
            id="home"
            className="scroll-m-28"
        >
            <motion.div
                className="flex items-center justify-center"
                initial={{ y: -25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0, duration: 0.25 }}
            >
                <Image
                    ref={ref}
                    className="rounded-xl border-4 border-zinc-100 sm:mt-36 mt-24 shadow-sm shadow-zinc-800"
                    src="https://i.imgur.com/R4NkK6G.jpg"
                    width={200}
                    height={300}
                    alt="head shot"
                ></Image>
            </motion.div>
            <div className="w-full flex justify-center">
                <div className="sm:max-w-2xl max-w-xs text-center">
                    <motion.p
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.05, duration: 0.1 }}
                        className="text-2xl sm:text-3xl font-sans my-10"
                    >
                        I'm <span className="font-bold">Justin</span>, a{" "}
                        <span className="font-bold">full stack developer </span> who is{" "}
                        <span className="italic">passionate</span> about creating modern{" "}
                        <span className="italic">user centered </span> web applications.
                    </motion.p>
                    <motion.div
                        className="flex justify-center sm:gap-4 min-w-96 gap-3 flex-col sm:flex-row items-center"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", delay: 0.1, duration: 0.1 }}
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
                            <BsEnvelope className="group-hover:translate-x-0.5 transition-all" />
                        </motion.button>
                        <motion.a
                            href="/Justin Kim Resume 2023.pdf"
                            download
                            className="button_primary group"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Download CV{" "}
                            <BsDownload className="group-hover:translate-y-0.5 transition-all" />
                        </motion.a>

                        <Link
                            href="https://www.linkedin.com/in/justin-kim6/"
                            target="_blank"
                        >
                            <motion.div
                                className="bg-gray-50 button_shape sm:p-2.5  border sm:w-auto w-44 border-gray-400 flex justify-center items-center gap-2 hover:bg-gray-100"
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="display sm:hidden">LinkedIn</span>
                                <BsLinkedin
                                    size={20}
                                    className="text-blue-800"
                                />
                            </motion.div>
                        </Link>
                        <Link
                            href="https://github.com/kimjust6"
                            target="_blank"
                        >
                            <motion.div
                                className="bg-gray-50 button_shape sm:p-2.5 px-4 py-2 border sm:w-auto w-44 border-gray-400 flex justify-center items-center gap-2 hover:bg-gray-100"
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <span className="display sm:hidden">Github</span>
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
