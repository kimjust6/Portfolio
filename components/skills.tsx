"use client";
import { useActiveSection } from "@/app/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./utils/section-heading";
import { useInViewSettings } from "@/lib/data";

const Skills = () => {
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("Skills");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);
    return (
        <section
            id="skills"
            className="scroll-m-28"
        >
            <div ref={ref}>
                <SectionHeading>Skills</SectionHeading>
            </div>
            <div className=" h-screen"></div>
        </section>
    );
};

export default Skills;
