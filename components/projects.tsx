"use client";

import { projectsData } from "@/lib/data";
import RenderProjects from "./utils/render-projects";
import SectionHeading from "./utils/section-heading";

const Projects = () => {
    return (
        <section id="projects" className="scroll-m-28">
            <div className="mb-10">
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
