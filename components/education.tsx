"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { useTheme } from "@/app/context/theme-context";
import { education, useInViewSettings } from "@/lib/data";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Reveal from "./utils/reveal";
import SectionHeading from "./utils/section-heading";

const Education = () => {
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    const { theme } = useTheme();

    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("Education");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            id="education"
            className="m-4 flex scroll-m-28 flex-col items-center sm:mx-8"
        >
            <div ref={ref} className="mb-4">
                <SectionHeading>EDUCATION</SectionHeading>
            </div>
            <div className="min-w-[min(50em,100%)]">
                <VerticalTimeline lineColor="" layout="1-column-left">
                    {education.map((edu) => {
                        return (
                            <Reveal key={edu.company + edu.date}>
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
                                    icon={edu.icon}
                                    iconStyle={{
                                        background:
                                            theme == "dark"
                                                ? "#111827"
                                                : "#fef6c7",
                                        fontSize: "1.5rem",
                                    }}
                                    date={edu.date}
                                >
                                    <h3 className="text-2xl font-bold">
                                        {edu.company}
                                    </h3>
                                    <h4 className="text-xl font-semibold dark:text-yellow-400">
                                        {edu.title}
                                    </h4>
                                    <p className="text-md !mb-2 !mt-0 text-gray-700 dark:text-gray-400">
                                        {edu.location}
                                    </p>
                                    {edu.description.map((list, index) => {
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

export default Education;
