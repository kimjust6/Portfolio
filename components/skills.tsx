"use client";
import { useActiveSection } from "@/app/context/active-section-context";
import { skillsData, useInViewSettings } from "@/lib/data";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Reveal from "./utils/reveal";
import SectionHeading from "./utils/section-heading";

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
            className="scroll-m-28 w-screen flex justify-center flex-col items-center"
        >
            <div
                ref={ref}
                className="mb-8"
            >
                <SectionHeading>MY Skills</SectionHeading>
            </div>
            <div className="w-screen flex justify-center max-w-6xl flex-wrap gap-8 ">
                {skillsData.map((skill) => {
                    return (
                        <ul
                            className="flex flex-col p-4 items-center  "
                            key={skill.title}
                        >
                            <Reveal>
                                <h2 className="subheading">{skill.title}</h2>
                            </Reveal>
                            <div className="flex items-end justify-center flex-wrap my-4">
                                {skill.skills.map((s, index) => {
                                    return (
                                        // because s can be undefined sometimes
                                        s && (
                                            <Reveal
                                                key={s.name}
                                                index={index}
                                            >
                                                <li className="flex flex-col items-center px-5 py-2 ">
                                                    <Image
                                                        className={
                                                            "hidden sm:block mb-2 " +
                                                            (s.name === "Next.js"
                                                                ? " dark:invert"
                                                                : "")
                                                        }
                                                        src={s.svg}
                                                        alt={s.name}
                                                        width={60}
                                                        height={60}
                                                    ></Image>
                                                    <Image
                                                        className={
                                                            "sm:hidden " +
                                                            (s.name === "Next.js"
                                                                ? " dark:invert"
                                                                : "")
                                                        }
                                                        src={s.svg}
                                                        alt={s.name}
                                                        width={45}
                                                        height={45}
                                                    ></Image>
                                                    <div className="text-sm text-gray-600 dark:text-gray-300">
                                                        {s.name}
                                                    </div>
                                                </li>
                                            </Reveal>
                                        )
                                    );
                                })}
                            </div>
                        </ul>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
