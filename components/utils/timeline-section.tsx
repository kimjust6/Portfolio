"use client";

import { useTheme } from "@/app/context/theme-context";
import type { ReactNode } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Reveal from "./reveal";
import SectionHeading from "./section-heading";

export type TimelineItem = {
    readonly title: string;
    readonly company: string;
    readonly location: string;
    readonly description: readonly string[];
    readonly icon: ReactNode;
    readonly date: string;
};

export default function TimelineSection({
    id,
    heading,
    items,
    containerClassName,
}: {
    id: string;
    heading: string;
    items: readonly TimelineItem[];
    containerClassName?: string;
}) {
    const { theme } = useTheme();
    const cardBackground = theme === "dark" ? "#111827" : "#fef6c7";

    return (
        <section
            id={id}
            className="m-4 flex scroll-m-28 flex-col items-center sm:mx-8"
        >
            <div className="mb-4">
                <SectionHeading>{heading}</SectionHeading>
            </div>
            <div className={containerClassName}>
                <VerticalTimeline lineColor="" layout="1-column-left">
                    {items.map((item, index) => (
                        <Reveal
                            index={index}
                            key={item.company + item.date}
                            className="mb-4 p-1"
                        >
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle={{
                                    background: cardBackground,
                                    boxShadow: "none",
                                    border: "1px solid rgba(0, 0, 0, 0.05)",
                                    padding: "1rem 1rem 1rem 1.5rem",
                                }}
                                contentArrowStyle={{
                                    borderRight: "7px solid #d1d5db",
                                }}
                                icon={item.icon}
                                iconStyle={{
                                    background: cardBackground,
                                    fontSize: "1.5rem",
                                }}
                                date={item.date}
                            >
                                <h3 className="text-2xl font-bold">
                                    {item.company}
                                </h3>
                                <h4 className="text-xl font-semibold dark:text-yellow-400">
                                    {item.title}
                                </h4>
                                <p className="text-md !mb-2 !mt-0 text-gray-700 dark:text-gray-400">
                                    {item.location}
                                </p>
                                {item.description.map((entry, descIndex) => (
                                    <Reveal key={descIndex}>
                                        <li>{entry}</li>
                                    </Reveal>
                                ))}
                            </VerticalTimelineElement>
                        </Reveal>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
}
