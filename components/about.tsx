"use client";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center text-md">
                <motion.h2
                    className="text-2xl font-bold"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.15, duration: 0.15 }}
                >
                    ABOUT ME
                </motion.h2>
                <motion.p
                className="text-center max-w-md sm:max-w-3xl"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", delay: 0.25, duration: 0.15 }}
                >
                    I love rising up to a challenge and I consider my love of learning and strong
                    work ethic to be some of my greatest attributes. I spend my free time
                    bouldering/rock climbing as well as following financial news and markets. Have a
                    look at what kind of projects I have been working on and feel free to contact me
                    using the button above or at kimjust6@gmail.com if you have any inquiries.
                </motion.p>
            </div>
        </section>
    );
};

export default About;
