"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";

interface Props {
    children: JSX.Element;
}

const Reveal = ({ children }: Props) => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div
            ref={ref}
            className=""
        >
            <motion.div
                variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.25, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;