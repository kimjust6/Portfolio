"use client";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");

        if (localTheme === "dark") {
            setTheme("dark");
        } else if (localTheme === "light") {
            setTheme("light");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    return (
        <button
            className="transition-all text-lg ml-2 border border-solid border-gray-600 
        opacity-80 hover:opacity-100 rounded-full w-7 h-7 sm:h-10 sm:w-10 flex justify-center items-center bg-yellow-50
        dark:bg-black dark:text-yellow-200 dark:backdrop-filter dark:backdrop-blur-lg"
            onClick={toggleTheme}
        >
            {theme === "light" ? (
                <BsMoon className="text-xl sm:text-2xl" />
            ) : (
                <BsSun className="text-xl sm:text-2xl" />
            )}
        </button>
    );
};

export default ThemeToggle;
