"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";

const Navigation = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSection();
    return (
        <header className="flex justify-center flex-row w-screen ">
            <div
                className="z-100 flex justify-center items-center fixed sm:rounded-full bg-amber-200 opacity-95 
                bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-95 sm:bg-opacity-80 shadow-md sm:shadow-lg shadow-gray-300 
                sm:mt-6 px-4 py-1 sm:py-2 rounded-md border sm:border-amber-300 text-lg z-[999] flex-wrap w-screen sm:w-fit
                dark:bg-gray-800  dark:border-gray-600 dark:shadow-none"
            >
                <motion.span
                    className="sm:hidden mr-4"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <ThemeToggle />
                </motion.span>
                {links.map((link) => {
                    return (
                        <motion.li
                            key={link.name}
                            className="flex justify-center items-center relative"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                data-text={link.name}
                                className={clsx(
                                    "my_navbar text-gray-700 mx-2 text-zinc-9500 opacity-100 dark:text-gray-50 hover:text-gray-950 hover:font-semibold py-1 data-text-title select-none",
                                    {
                                        "font-semibold text-gray-950": activeSection === link.name,
                                    }
                                )}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    const time = Date.now();
                                    setTimeOfLastClick(time);
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.div
                                        layoutId="pill"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            duration: 1,
                                            damping: 30,
                                        }}
                                        className="absolute inset-0 bg-amber-100 rounded-full -z-10 border border-gray-600 dark:bg-gray-900 
                                        dark:text-yellow-200 "
                                    ></motion.div>
                                )}
                            </Link>
                        </motion.li>
                    );
                })}
                <motion.span
                    className="hidden sm:flex"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <ThemeToggle />
                </motion.span>
            </div>
            <motion.button
                className={
                    "button_primary  fixed z-20 top-16 right-10 hidden  " 
                    // + (activeSection === "Home" ? "hidden" : "sm:display")
                }
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
            >
                Download CV
            </motion.button>
        </header>
    );
};

export default Navigation;
