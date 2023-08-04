"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./section-heading";

const About = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center text-md">
                <SectionHeading>ABOUT ME</SectionHeading>
                <motion.p
                    className="text-center max-w-md sm:max-w-3xl text-md mt-2 sm:mt-4"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
                >
                    I graduated from Seneca College with a BSc. in Software Development and worked
                    as full stack developer at Partech Inc. At Partech I assisted in launching the
                    new Angular web portal and launched two features including a new{" "}
                    <Link
                        className="text-indigo-600 underline"
                        target="_blank"
                        href="https://www.youtube.com/watch?v=7nD-0ziK3VY"
                    >
                        dashboard
                    </Link>
                    . love rising up to a challenge and I consider my love of learning and strong
                    work ethic to be some of my greatest assets.
                </motion.p>
                <motion.p
                    className="text-center max-w-md sm:max-w-3xl text-md mt-2 sm:mt-4"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.25, duration: 0.25 }}
                >
                    I spend my free time bouldering/rock climbing and enjoy following financial news
                    and markets. Have a look at what kind of projects I have been working on and
                    feel free to contact me using the button above or at{" "}
                    <Link
                        className=" text-indigo-600 underline"
                        href="mailto:kimjust6@gmail.com"
                    >
                        kimjust6@gmail.com{" "}
                    </Link>
                    if you have any inquiries.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
