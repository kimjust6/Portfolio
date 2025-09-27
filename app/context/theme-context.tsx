"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = window.localStorage.getItem("theme") as Theme | null;
        if (stored) {
            setTheme(stored);
        } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) {
            return;
        }
        document.documentElement.classList.toggle("dark", theme === "dark");
        window.localStorage.setItem("theme", theme);
    }, [theme, mounted]);

    if (!mounted) {
        // prevent hydration mismatch: render nothing or a loader until mounted
        return null;
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme: () =>
                    setTheme((t) => (t === "light" ? "dark" : "light")),
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error("useTheme must be used within ThemeContextProvider");
    return context;
};
