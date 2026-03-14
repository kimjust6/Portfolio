/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import SectionHeading from "./utils/section-heading";

const About = () => {
    return (
        <section
            id="about"
            className="text-md mx-6 flex scroll-m-28 flex-col items-center justify-center"
        >
            <div className="mb-4">
                <SectionHeading>ABOUT ME</SectionHeading>
            </div>

            <motion.p
                className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.2, duration: 0.2 }}
            >
                My name is Justin and I'm a full stack developer who is
                passionate about learning and solving problems.
            </motion.p>
            <motion.p
                className="text-md mt-2 max-w-md text-center sm:mt-4 sm:max-w-3xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.25, duration: 0.25 }}
            >
                Aside from programming, I enjoy rock climbing/bouldering and
                watching films. Have a look around to learn about me and see
                what projects I have been working on!
            </motion.p>
        </section>
    );
};

export default About;
