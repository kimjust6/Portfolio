import { useActiveSection } from "@/app/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./utils/section-heading";
import { useInViewSettings } from "@/lib/data";

const Experience = () => {
    const { ref, inView } = useInView(useInViewSettings);
    const { setActiveSection, timeOfLastClick } = useActiveSection();

    useEffect(() => {
        return () => {
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection("Experience");
            }
        };
    }, [inView, setActiveSection, timeOfLastClick]);

    return (
        <section
            id="experience"
            className="scroll-m-28"
        >
            <div ref={ref}>
                <SectionHeading>EXPERIENCE</SectionHeading>
            </div>
            <div className=" h-screen"></div>
        </section>
    );
};

export default Experience;
