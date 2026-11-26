import { skillsData } from "@/lib/data";
import Image from "next/image";
import Reveal from "./utils/reveal";
import SectionHeading from "./utils/section-heading";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex w-screen scroll-m-28 flex-col items-center justify-center"
        >
            <div className="mb-8">
                <SectionHeading>MY Skills</SectionHeading>
            </div>
            <div className="grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
                {skillsData.map((skill) => (
                    <div
                        className="flex flex-col items-center p-4"
                        key={skill.title}
                    >
                        <Reveal>
                            <h3 className="subheading">{skill.title}</h3>
                        </Reveal>
                        <ul className="my-4 flex flex-wrap items-end justify-center">
                            {skill.skills.map(
                                (s, index) =>
                                    s && (
                                        <li
                                            key={s.name}
                                            className="px-5 py-2"
                                        >
                                            <Reveal
                                                index={index}
                                                className="flex flex-col items-center"
                                            >
                                                <>
                                                    <Image
                                                        className={
                                                            "h-[45px] w-[45px] sm:mb-2 sm:h-[60px] sm:w-[60px] " +
                                                            (s.name === "Next.js"
                                                                ? "dark:invert"
                                                                : "")
                                                        }
                                                        src={s.svg}
                                                        alt={s.name}
                                                        width={60}
                                                        height={60}
                                                    />
                                                    <div className="text-sm text-gray-600 dark:text-gray-300">
                                                        {s.name}
                                                    </div>
                                                </>
                                            </Reveal>
                                        </li>
                                    )
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
