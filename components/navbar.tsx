"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { classicNameResolver } from "typescript";

const NavBar = () => {
    return (
        <header className="z-100 relative">
            <motion.div
                className="w-full justify-center flex"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div
                    className="flex justify-center fixed top-0 sm:rounded-full bg-amber-200 opacity-95
                bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md sm:shadow-lg shadow-black 
                sm:mt-6 px-4 py-2 rounded-md border sm:border-amber-100 w-full sm:w-fit text-lg"
                >
                    <ul className="flex max-w-xl ">
                        <motion.li
                            className="flex flex-wrap justify-center w-full"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            {links.map((link) => {
                                return (
                                    <Link
                                        className="mx-2 text-zinc-800 opacity-100"
                                        key={uuidv4()}
                                        href={link.hash}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </motion.li>
                    </ul>
                </div>
            </motion.div>
        </header>
    );
};

export default NavBar;
