"use client";

import { links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSection } from "@/app/context/active-section-context";
import { useRouter } from "next/navigation";

const Navigation = () => {
    const { activeSection, setActiveSection } = useActiveSection();
    const router = useRouter();

    return (
        <header className="z-100  transition-all">
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
                                    key={link.name}
                                    className="flex flex-wrap justify-center w-full relative"
                                    initial={{ y: -50, opacity: 1 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <Link
                                        href={link.hash}
                                        data-text={link.name}
                                        className={clsx(
                                            "my_navbar text-gray-700 mx-2 text-zinc-9500 opacity-100 hover:text-gray-950 hover:font-semibold transition-all data-text=title",
                                            {
                                                "font-semibold text-gray-950":
                                                    activeSection === link.name,
                                            }
                                        )}
                                        onClick={() => {
                                            setActiveSection(link.name);
                                        }}
                                    >
                                        {link.name}

                                        {link.name === activeSection && (
                                            <motion.div
                                                layoutId="pill"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 380,
                                                    duration: 5,
                                                    damping: 30,
                                                }}
                                                className="absolute inset-0 bg-amber-100 rounded-full -z-10"
                                            ></motion.div>
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
