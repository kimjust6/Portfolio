"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { projectsData, useInViewSettings } from "@/lib/data";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import RenderProjects from "./utils/render-projects";
import SectionHeading from "./utils/section-heading";

const Projects = () => {
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("Projects");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section id="projects" className="scroll-m-28">
            <div ref={ref} className="mb-10">
                <SectionHeading>MY PROJECTS</SectionHeading>
            </div>
            <div className="flex w-screen items-center justify-center">
                <div className="flex w-screen max-w-7xl flex-1 flex-col items-center xl:block xl:columns-2">
                    {/* projects */}
                    {RenderProjects(projectsData)}
                </div>
            </div>
        </section>
    );
};

export default Projects;
