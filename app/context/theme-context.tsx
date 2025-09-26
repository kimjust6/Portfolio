"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextProviderProps = { children: React.ReactNode };
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<Theme>("light");

    const themeSet = (theme: Theme) => {
        if (theme === "light") {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        } else {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
    };

    const toggleTheme = () => {
        if (theme === "light") {
            themeSet("dark");
        } else {
            themeSet("light");
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");

        if (localTheme === "dark") {
            themeSet("dark");
        } else if (localTheme === "light") {
            themeSet("light");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            themeSet("dark");
        } else {
            themeSet("light");
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
};
