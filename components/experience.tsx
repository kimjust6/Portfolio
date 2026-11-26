import { workExperience } from "@/lib/data";
import TimelineSection from "./utils/timeline-section";

const Experience = () => {
    return (
        <TimelineSection
            id="experience"
            heading="WORK EXPERIENCE"
            items={workExperience}
            containerClassName="max-w-4xl"
        />
    );
};

export default Experience;
