"use client";

import { useActiveSection } from "@/app/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./utils/section-heading";
import { useInViewSettings } from "@/lib/data";

const Contact = () => {
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("Contact");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            id="contact"
            className="scroll-m-28"
        >
            <div ref={ref}>
                <SectionHeading>contact</SectionHeading>
            </div>
            <div className=" h-screen"></div>
        </section>
    );
};

export default Contact;
