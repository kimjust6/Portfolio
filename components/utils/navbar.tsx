"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [activeSection, setActiveSection] = useState("");
    console.log("nice");

    return (
        <header className="z-100 relative transition-all">
            <motion.div
                className="w-full justify-center flex"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.05, duration: 0.15 }}
            >
                <div
                    className="flex justify-center fixed sm:rounded-full bg-amber-200 opacity-95
                bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-95 sm:bg-opacity-80 shadow-md sm:shadow-lg shadow-gray-300 
                sm:mt-6 px-4 py-2 rounded-md border sm:border-amber-100 w-full sm:w-fit text-lg z-[999]"
                >
                    <ul className="max-w-xl flex flex-row ">
                        {links.map((link) => {
                            return (
                                <motion.li
                                    key={uuidv4()}
                                    className="flex flex-wrap justify-center w-full relative"
                                    initial={{ y: 0, opacity: 1 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <Link
                                        data-text={link.name}
                                        className={clsx(
                                            "my_navbar mx-2 text-zinc-9500 opacity-100 hover:text-gray-950 transition-all hover:font-semibold data-text=title",
                                            { " ": activeSection === link.name }
                                        )}
                                        href={link.hash}
                                        onClick={() => setActiveSection(link.name)}
                                    >
                                        {link.name}
                                        {link.name === activeSection && (
                                            <motion.span
                                                className="bg-amber-100 rounded-full absolute inset-0  -z-10 px-5"
                                                layoutId="activeSection"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    damping: 30,
                                                }}
                                            ></motion.span>
                                        )}
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </motion.div>
        </header>
    );
};

export default Navigation;


