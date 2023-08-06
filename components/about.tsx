"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./utils/section-heading";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useActiveSection } from "@/app/context/active-section-context";
import { useInViewSettings } from "@/lib/data";

const About = () => {
    const { ref, inView } = useInView({
        // initialInView: true,
        rootMargin: "-50% 0% -50% 0%",
    });
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("About");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            id="about"
            className="scroll-m-28 flex flex-col items-center justify-center text-md mx-6"
        >
            <div
                ref={ref}
                className="mb-4"
            >
                <SectionHeading>ABOUT ME</SectionHeading>
            </div>
            <motion.p
                className="text-center max-w-md sm:max-w-3xl text-md mt-2 sm:mt-4"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
            >
                I graduated from Seneca College with a BSc. in Software Development and worked as a
                full stack developer at Partech Inc where I assisted in developing and launching the
                new Angular web portal. In addition, I developed two features including a new{" "}
                <Link
                    className="text-indigo-600 font-semibold underline"
                    target="_blank"
                    href="https://www.youtube.com/watch?v=7nD-0ziK3VY"
                >
                    dashboard
                </Link>
                . I love rising up to a challenge and I consider my love of learning and strong work
                ethic to be some of my greatest assets.
            </motion.p>
            <motion.p
                className="text-center max-w-md sm:max-w-3xl text-md mt-2 sm:mt-4"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.25, duration: 0.25 }}
            >
                I spend my free time bouldering/rock climbing and enjoy following financial news and
                markets. Have a look at what kind of projects I have been working on and feel free
                to contact me using the button above or at{" "}
                <Link
                    className=" text-indigo-600 font-semibold underline"
                    href="mailto:kimjust6@gmail.com"
                >
                    kimjust6@gmail.com{" "}
                </Link>
                if you have any inquiries.
            </motion.p>
        </section>
    );
};

export default About;
