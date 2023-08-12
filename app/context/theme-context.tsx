'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = "light" | "dark";
const themeContext = createContext(null);
type ThemeContextProviderProps = {children: React.ReactNode}
type ThemeContextType = {
    theme:Theme;
    toggleTheme: () => void;
}

const ThemeContext= createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({children}:ThemeContextProviderProps) => {

    const [theme, setTheme] = useState<Theme>("light");

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
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

export const useTheme=()=>{
    const context = useContext(ThemeContext);

    if (context === null)
    {
        throw new Error("useTheme must be used within a ThemeContextProvider")
    }

    return context;
}