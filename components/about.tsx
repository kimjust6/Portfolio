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
                My name Justin and I'm a full stack developer who is passionate about creating
                modern responsive user centered websites. I love rising up to a challenge and I
                consider my love of learning and strong work ethic to be some of my greatest assets.
            </motion.p>
            <motion.p
                className="text-center max-w-md sm:max-w-3xl text-md mt-2 sm:mt-4"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.25, duration: 0.25 }}
            >
                In addition to programming, I love rock climbing/bouldering and enjoy following
                financial markets. Have a look around to learn about me and see what of projects I
                have been working on!
            </motion.p>
        </section>
    );
};

export default About;
