"use client";

import { v4 as uuid4 } from "uuid";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageWrapper from "./page-wrapper";

const navList = [
    { description: "About Me", path: "/about" },
    { description: "Skills", path: "/skills" },
    { description: "Work Experience", path: "/experience" },
    { description: "Projects", path: "/projects" },
    { description: "Resume", path: "/resume" },
];

const Navbar = () => {
    return (
        <PageWrapper>
            <div className="flex justify-center h-20 items-center sticky top-30 ">
                <div className=" max-w-fit opacity-75 bg-amber-200 px-6 py-2 rounded-full text-zinc-800">
                    <ul className="flex gap-8 items-center ">
                        {navList.map((navItem) => {
                            return (
                                <li key={uuid4()}>
                                    <Link href={navItem.path}>{navItem.description}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Navbar;
