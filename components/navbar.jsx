"use client";

import { v4 as uuid4 } from "uuid";
import Link from "next/link";
import React, { useState } from "react";

const navList = [
    { description: "About Me", path: "/about" },
    { description: "Skills", path: "/skills" },
    { description: "Work Experience", path: "/experience" },
    { description: "Projects", path: "/projects" },
    { description: "Resume", path: "/resume" },
];

const Navbar = () => {
    return (
        <div className="navbar w-full flex space-between">
            <div className="flex w-100">
                <Link
                    href="/"
                    className="flex btn btn-ghost normal-case text-xl"
                >
                    justin kim
                </Link>
            </div>
            <div className="flex">
                <ul>
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
    );
};

export default Navbar;
