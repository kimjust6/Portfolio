import { useActiveSection } from "@/app/context/active-section-context";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./utils/section-heading";
import { useInViewSettings } from "@/lib/data";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperience } from "@/lib/data";
import Reveal from "./utils/reveal";
import { isTemplateExpression } from "typescript";

const Experience = () => {
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();

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
            className="scroll-m-28 sm:mx-8 m-4 flex flex-col items-center"
        >
            <div
                ref={ref}
                className="mb-4 "
            >
                <SectionHeading>EXPERIENCE</SectionHeading>
            </div>
            <div className="max-w-3xl">
                <VerticalTimeline
                    lineColor=""
                    layout="1-column-left"
                >
                    {workExperience.map((exp) => {
                        return (
                            // <React.Fragment key={exp.company + exp.date}>
                            <VerticalTimelineElement
                                key={exp.company + exp.date}
                                contentStyle={{
                                    background: "#fef6c7",
                                    boxShadow: "none",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    padding: "1rem 1rem 1rem 1.5rem",
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid #d1d5db",
                                }}
                                icon={exp.icon}
                                iconStyle={{ background: "#fef6c7", fontSize: "1.5rem" }}
                                date={exp.date}
                            >
                                <h3 className="text-2xl font-bold">{exp.company}</h3>
                                <h4 className="text-xl font-semibold">{exp.title}</h4>
                                <p className="text-md !mt-0 !mb-2 text-gray-700">{exp.location}</p>
                                {/* <ul className="text-lg"> */}
                                {exp.description.map((list, index) => {
                                    return (
                                        <Reveal key={index}>
                                            <li>{list}</li>
                                        </Reveal>
                                    );
                                })}
                                {/* </ul> */}
                            </VerticalTimelineElement>
                            // </React.Fragment>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </section>
    );
};

export default Experience;
