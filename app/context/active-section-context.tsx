"use client";

import { links } from "@/lib/data";
import React, { createContext, useContext, useState } from "react";

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
