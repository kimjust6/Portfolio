"use client";
import { motion } from "framer-motion";

type SectionHeadingProps = { children: React.ReactNode };

const SectionHeading = ({ children }: SectionHeadingProps) => {
    return (
        <div className="text-md flex flex-col items-center justify-center">
            <motion.h2
                className="text-2xl font-bold uppercase sm:text-3xl"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: 0.2, duration: 0.25 }}
            >
                {children}
            </motion.h2>
        </div>
    );
};

export default SectionHeading;
