import { education } from "@/lib/data";
import TimelineSection from "./utils/timeline-section";

const Education = () => {
    return (
        <TimelineSection
            id="education"
            heading="EDUCATION"
            items={education}
            containerClassName="min-w-[min(50em,100%)]"
        />
    );
};

export default Education;
