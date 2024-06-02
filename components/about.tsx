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
            className="text-md mx-6 flex scroll-m-28 flex-col items-center justify-center"
        >
            <div ref={ref} className="mb-4">
                <SectionHeading>ABOUT ME</SectionHeading>
            </div>

            <motion.p
                className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
            >
                My name is Justin and I'm a full stack developer who is
                passionate about creating responsive user centered web
                applications. My strong work ethic, willingness to rising up to
                challenges, and eagerness to learn are some of my greatest
                assets.
            </motion.p>
            <motion.p
                className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.25, duration: 0.25 }}
            >
                Aside from programming, I enjoy rock climbing/bouldering and
                following financial markets. Have a look around to learn about
                me and see what projects I have been working on!
            </motion.p>
        </section>
    );
};

export default About;
