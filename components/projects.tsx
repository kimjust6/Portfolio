"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
    return (
        <section>
            <SectionHeading>PROJECTS</SectionHeading>
            <div className="mb-4"></div>
            {projectsData.map((project: any) => {
                return (
                    // card
                    <div
                        key={uuidv4()}
                        className="w-screen w-100 flex justify-center"
                    >
                        <div>
                            <div className="max-w-xl bg-gray-100  rounded-xl border border-gray-200 shadow-md shadow-gray-300">
                                {project?.carouselImage[0].image && (
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
                                <div className="sm:max-w-2xl m-2 pb-7 px-7">
                                    <h1 className="font-bold text-xl ">{project.title}</h1>
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
                                    <p>{project.description}</p>

                                    <Link
                                        target="_blank"
                                        href={project.codeURL}
                                    >
                                        Github
                                    </Link>
                                </div>
                            </div>
                            <br></br>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default Projects;
