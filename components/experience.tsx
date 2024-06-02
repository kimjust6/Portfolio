"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { useTheme } from "@/app/context/theme-context";
import { useInViewSettings, workExperience } from "@/lib/data";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Reveal from "./utils/reveal";
import SectionHeading from "./utils/section-heading";

const Experience = () => {
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();
    const { theme } = useTheme();
    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("Experience");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            id="experience"
            className="m-4 flex scroll-m-28 flex-col items-center sm:mx-8"
        >
            <div ref={ref} className="mb-4">
                <SectionHeading>EXPERIENCE</SectionHeading>
            </div>
            <div className="max-w-3xl">
                <VerticalTimeline lineColor="" layout="1-column-left">
                    {workExperience.map((exp, index2) => {
                        return (
                            <Reveal
                                index={index2}
                                key={exp.company + exp.date}
                                className="mb-4 p-1"
                            >
                                <VerticalTimelineElement
                                    visible={true}
                                    contentStyle={{
                                        background:
                                            theme == "dark"
                                                ? "#111827"
                                                : "#fef6c7",
                                        boxShadow: "none",
                                        border: "1px solid rgba(0, 0, 0, 0.05)",
                                        padding: "1rem 1rem 1rem 1.5rem",
                                    }}
                                    contentArrowStyle={{
                                        borderRight: "7px solid #d1d5db",
                                    }}
                                    icon={exp.icon}
                                    iconStyle={{
                                        background:
                                            theme == "dark"
                                                ? "#111827"
                                                : "#fef6c7",
                                        fontSize: "1.5rem",
                                    }}
                                    date={exp.date}
                                >
                                    <h3 className="text-2xl font-bold">
                                        {exp.company}
                                    </h3>
                                    <h4 className="text-xl font-semibold dark:text-yellow-400">
                                        {exp.title}
                                    </h4>
                                    <p className="text-md !mb-2 !mt-0 text-gray-700 dark:text-gray-400">
                                        {exp.location}
                                    </p>
                                    {exp.description.map((list, index) => {
                                        return (
                                            <Reveal key={index}>
                                                <li>{list}</li>
                                            </Reveal>
                                        );
                                    })}
                                </VerticalTimelineElement>
                            </Reveal>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
