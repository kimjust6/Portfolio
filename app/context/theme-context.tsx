"use client";
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useSyncExternalStore,
} from "react";

type Theme = "light" | "dark";
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const THEME_STORAGE_KEY = "theme";
const THEME_CHANGE_EVENT = "theme-change";

const ThemeContext = createContext<ThemeContextType | null>(null);

function getThemeSnapshot(): Theme {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
        return stored;
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
}

function getServerThemeSnapshot(): Theme {
    return "dark";
}

function subscribeToTheme(callback: () => void): () => void {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
    const handleStorage = (e: StorageEvent) => {
        if (e.key === THEME_STORAGE_KEY) {
            callback();
        }
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(THEME_CHANGE_EVENT, callback);
    mediaQuery.addEventListener("change", callback);

    return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(THEME_CHANGE_EVENT, callback);
        mediaQuery.removeEventListener("change", callback);
    };
}

function persistTheme(theme: Theme) {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const theme = useSyncExternalStore(
        subscribeToTheme,
        getThemeSnapshot,
        getServerThemeSnapshot
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = useCallback(() => {
        const nextTheme: Theme = theme === "light" ? "dark" : "light";
        persistTheme(nextTheme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
