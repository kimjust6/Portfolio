"use client";
import { useTheme } from "@/app/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
    
    const { theme, toggleTheme } = useTheme();
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
