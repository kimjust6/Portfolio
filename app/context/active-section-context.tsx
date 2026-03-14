"use client";

import { links } from "@/lib/data";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = { children: React.ReactNode };
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    // Keep a ref so the scroll handler always reads the latest value
    // without needing to re-register the listener on every click.
    const timeOfLastClickRef = useRef(timeOfLastClick);
    useEffect(() => {
        timeOfLastClickRef.current = timeOfLastClick;
    }, [timeOfLastClick]);

    useEffect(() => {
        const handleScroll = () => {
            // Don't override a click-driven navigation for 1 second
            if (Date.now() - timeOfLastClickRef.current < 1000) return;

            // Threshold ≈ navbar height (scroll-m-28 = 112px, + a little breathing room)
            const threshold = 120;

            // Walk sections from bottom to top; the first one whose top is
            // at-or-above the threshold is the "current" section.
            for (let i = links.length - 1; i >= 0; i--) {
                const id = links[i].hash.slice(1); // strip leading '#'
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= threshold) {
                    setActiveSection(links[i].name);
                    return;
                }
            }

            // Nothing has scrolled past the navbar yet → we're at the top
            setActiveSection("Home");
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // sync on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // stable – uses ref for timeOfLastClick

    return (
        <ActiveSectionContext.Provider
            value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
};

export default ActiveSectionContextProvider;

export function useActiveSection() {
    const context = useContext(ActiveSectionContext);
    if (!context) {
        throw new Error("useActiveSection must be used within an ActiveSectionContextProvider.");
    }
    return context;
}
