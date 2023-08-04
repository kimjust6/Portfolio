"use client";

import { motion } from "framer-motion";
import SectionHeading from "./utils/section-heading";
import { projectsData } from "@/lib/data";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsCloud } from "react-icons/bs";
import Reveal from "./utils/reveal";

const Projects = () => {
    return (
        <section id="projects" className="scroll-m-28">
            <Reveal>
                <SectionHeading>PROJECTS</SectionHeading>
            </Reveal>
            <div className="mb-4"></div>
            <div className="w-screen flex justify-center">
                <div className="flex flex-wrap w-screen justify-center max-w-7xl ">
                    {/* projects */}
                    {RenderProjects(projectsData)}
                </div>
            </div>
        </section>
    );
};

export default Projects;

function RenderProjects(projectsData: any) {
    return projectsData.map((project: any) => {
        return (
            // card
            <Reveal key={uuidv4()}>
                <div
                    // className=" flex justify-center my-8 px-8"
                    className=" flex justify-center my-8 px-8 items-baseline"
                >
                    {/* image */}
                    {/* <div className="max-w-lg sm:max-w-xl pb-2 bg-gray-100  rounded-xl border  shadow-md shadow-gray-300 flex flex-col justify-between"> */}
                    <div className="max-w-lg sm:max-w-xl pb-2 bg-gray-100  rounded-xl border  shadow-md shadow-gray-300 flex flex-col ">
                        <div className="">
                            {project?.carouselImage[0]?.image && (
                                <Image
                                    className="rounded-t-xl"
                                    alt={project?.carouselImage[0].alt}
                                    src={project?.carouselImage[0].image}
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    style={{ width: "100%", height: "auto" }} // optional
                                ></Image>
                            )}
                            {/* card body */}
                            <div className="sm:max-w-2xl px-7 mt-6">
                                <h1 className="font-bold text-xl pb-2">{project.title}</h1>
                                {/* tech */}
                                <div className="gap-1.5 flex flex-row flex-wrap justify-center sm:justify-start">
                                    {project.tech.map((technology: any) => {
                                        return (
                                            <div
                                                className=" bg-white p-1 px-1.5  my-1 rounded-full flex select-none
                            justify-center items-center shadow-sm shadow-gray-300 text-sm"
                                                key={uuidv4()}
                                            >
                                                {technology}{" "}
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="py-4">{project.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 h-w-full justify-center mb-4">
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link
                                    className="button_primary sm:w-44 "
                                    target="_blank"
                                    href={project.codeURL}
                                >
                                    Github
                                    <BsGithub size={20} />
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Link
                                    className="button_accent sm:w-44"
                                    target="_blank"
                                    href={project?.liveDemoURL ?? project?.videoDemoURL}
                                >
                                    {project?.liveDemoURL ? "Live Demo" : "Video Demo"}
                                    {project?.liveDemoURL ? (
                                        <BsCloud size={20} />
                                    ) : (
                                        <BsYoutube size={20} />
                                    )}
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Reveal>
        );
    });
}
