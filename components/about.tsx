/* eslint-disable react/no-unescaped-entities */

import { useActiveSection } from "@/app/context/active-section-context";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./utils/section-heading";

const About = () => {
    const { ref, inView } = useInView({
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
                modern responsive user centered websites. I love rising up to a challenge and my
                and strong work ethic eagerness to learn are some of my greatest assets.
            </motion.p>
            <motion.p
                className="text-center max-w-md sm:max-w-3xl text-md mt-2 sm:mt-4"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.25, duration: 0.25 }}
            >
                Aside from programming, I enjoy rock climbing/bouldering and following
                financial markets. Have a look around to learn about me and see what of projects I
                have been working on!
            </motion.p>
        </section>
    );
};

export default About;
