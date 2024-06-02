"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const Navigation = () => {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSection();
    const [isOnTop, setIsOnTop] = useState(true);
    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 150) {
            setIsOnTop(false);
        } else {
            setIsOnTop(true);
        }
    });

    return (
        <nav className="flex w-screen flex-row justify-center">
            <div className="z-100 fixed z-[999] flex w-screen flex-wrap items-center justify-center rounded-md border bg-amber-200 bg-opacity-95 bg-clip-padding px-4 py-1 text-lg opacity-95 shadow-md shadow-gray-300 backdrop-blur-lg backdrop-filter dark:border-gray-600 dark:bg-gray-800 dark:shadow-none sm:mt-6 sm:w-fit sm:border-amber-300 sm:bg-opacity-80 sm:py-2 sm:shadow-lg">
                <motion.span
                    className="mr-4 sm:hidden"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <ThemeToggle />
                </motion.span>
                {links.map((link) => {
                    return (
                        <motion.li
                            key={link.name}
                            className="relative flex items-center justify-center"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                data-text={link.name}
                                className={clsx(
                                    "my_navbar text-zinc-9500 data-text-title mx-2 select-none py-1 text-gray-700 opacity-100 transition-all hover:font-semibold hover:text-gray-950 dark:text-gray-50",
                                    {
                                        "font-semibold text-gray-950":
                                            activeSection === link.name,
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
                                        className="absolute inset-0 -z-10 rounded-lg border border-gray-600 bg-amber-100 dark:bg-gray-900 dark:text-yellow-200"
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
        </nav>
    );
};

export default Navigation;
