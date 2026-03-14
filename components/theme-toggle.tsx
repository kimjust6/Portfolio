"use client";
import { useTheme } from "@/app/context/theme-context";
import { BsSunFill } from "react-icons/bs";
import { LuMoonStar } from "react-icons/lu";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`
                relative flex h-7 w-13 cursor-pointer items-center rounded-full border px-1
                transition-colors duration-300
                ${isDark
                    ? "border-gray-500 bg-gray-700"
                    : "border-amber-400 bg-amber-100"}
            `}
        >
            {/* sliding knob */}
            <span
                className={`
                    absolute flex h-5 w-5 items-center justify-center rounded-full shadow-sm
                    transition-all duration-300
                    ${isDark
                        ? "translate-x-6 bg-gray-900 text-yellow-300"
                        : "translate-x-0 bg-white text-amber-500"}
                `}
            >
                {isDark
                    ? <LuMoonStar size={11} strokeWidth={1.5} />
                    : <BsSunFill size={11} />
                }
            </span>

            {/* background icon hint on the opposite side */}
            <span className={`ml-auto mr-0.5 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-40"}`}>
                <LuMoonStar size={10} className="text-gray-500" strokeWidth={1.5} />
            </span>
        </button>
    );
};

export default ThemeToggle;
