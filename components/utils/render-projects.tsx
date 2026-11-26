"use client";

import { useTheme } from "@/app/context/theme-context";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BsCloud, BsGithub, BsYoutube } from "react-icons/bs";
import Reveal from "./reveal";

type ProjectImage = {
    readonly image: string;
    readonly alt: string;
};

export type Project = {
    readonly title: string;
    readonly tech: readonly string[];
    readonly description: string;
    readonly codeURL: string;
    readonly liveDemoURL?: string;
    readonly videoDemoURL?: string;
    readonly carouselImage: readonly ProjectImage[];
};

function ProjectActionLink({
    href,
    variant,
    children,
}: {
    href: string;
    variant: "primary" | "secondary";
    children: ReactNode;
}) {
    const buttonClass =
        variant === "primary" ? "button_primary" : "button_secondary";

    return (
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link className={`sm:w-44 ${buttonClass}`} target="_blank" href={href}>
                {children}
            </Link>
        </motion.div>
    );
}

export function ProjectCard({ project }: { project: Project }) {
    const { theme } = useTheme();
    const isDark = theme === "dark";
    const demoUrl = project.liveDemoURL ?? project.videoDemoURL;

    return (
        <Reveal>
            <div className="mb-4 flex-1 break-inside-avoid px-4 sm:mb-8 sm:px-8">
                <div className="flex max-w-lg flex-col rounded-xl border border-gray-400 bg-gray-100 pb-2 shadow-md shadow-gray-300 sm:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                    <div>
                        {project.carouselImage[0]?.image && (
                            <Image
                                priority={true}
                                className="rounded-t-xl"
                                alt={project.carouselImage[0].alt}
                                src={project.carouselImage[0].image}
                                width={0}
                                height={0}
                                sizes="100%"
                                style={{ width: "100%", height: "auto" }}
                            />
                        )}
                        <div className="mt-6 px-5 sm:max-w-2xl sm:px-7">
                            <h3 className="pb-2 text-xl font-bold">
                                {project.title}
                            </h3>
                            <div className="flex flex-row flex-wrap justify-center gap-1.5 sm:justify-start">
                                {project.tech.map((technology) => (
                                    <div
                                        className="my-1 flex items-center justify-center rounded-full bg-white p-1 px-1.5 text-sm shadow-sm shadow-gray-300 select-none dark:border dark:border-gray-700 dark:bg-gray-950 dark:shadow-none"
                                        key={`${project.title}-${technology}`}
                                    >
                                        {technology}
                                    </div>
                                ))}
                            </div>
                            <p className="py-4">{project.description}</p>
                        </div>
                    </div>
                    <div className="h-w-full mb-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
                        <ProjectActionLink
                            href={project.codeURL}
                            variant={isDark ? "secondary" : "primary"}
                        >
                            GitHub
                            <BsGithub size={20} />
                        </ProjectActionLink>
                        {demoUrl && (
                            <ProjectActionLink
                                href={demoUrl}
                                variant={isDark ? "primary" : "secondary"}
                            >
                                {project.liveDemoURL ? "Live Demo" : "Video Demo"}
                                {project.liveDemoURL ? (
                                    <BsCloud size={20} />
                                ) : (
                                    <BsYoutube size={20} />
                                )}
                            </ProjectActionLink>
                        )}
                    </div>
                </div>
            </div>
        </Reveal>
    );
}

export default function ProjectList({
    projects,
}: {
    projects: readonly Project[];
}) {
    return (
        <>
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </>
    );
}
