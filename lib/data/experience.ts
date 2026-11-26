import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const workExperience = [
    {
        title: "Software Developer II",
        company: "Dayforce",
        location: "Toronto, ON",
        description: [
            "Co-own the background job engine, a core platform service, within a collaborative engineering team",
            "Debug and resolve defects using Application Insights, speeding up root-cause analysis",
            "Lead end-to-end, regression, and performance testing and sign-offs to ensure production readiness",
            "Leverage AI tools to accelerate development, debugging, test design, and documentation",
            "Write user stories for new features and discovered issues, shaping the team backlog",
            "Create and maintain technical documentation to support team knowledge sharing",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "June 2026 - Present",
    },
    {
        title: "Développeur Maintenance et Évolutions",
        company: "Verndale Canada",
        location: "Montreal, QC",
        description: [
            "Worked with clients to scope requirements, define acceptance criteria, architect technical solutions, and deliver features throughout the SDLC from development through QA and production deployment using .NET Core and React",
            "Provided support for 8+ clients, triaging and resolving Zendesk tickets for their .NET Core production applications, including SEO defects, performance degradation, and critical business logic failures",
            "Utilized Application Insights to monitor application health, trace errors, and conduct root cause analysis on production incidents",
            "Authored technical documentation and end-user guides for newly shipped features, reducing support overhead for development teams and clients",
            "Communicated complex technical issues to non-technical stakeholders, customers, and cross-functional teammates to drive timely resolutions",
            "Leveraged AI developer tools including Claude Sonnet and ChatGPT Codex to accelerate development workflows, improve code quality, and increase productivity across frontend and backend tasks",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "Feb 2024 - May 2026",
    },
    {
        title: "Full Stack Developer",
        company: "ParTech Inc.",
        location: "Markham, ON",
        description: [
            "Debugged and enhanced a widget-based dashboard that visualized and monitored restaurant performance metrics in real time",
            "Reduced dashboard API calls by up to 30% through serialization of API requests using RxJS and implementation of custom lazy loading logic",
            "Designed, developed, and launched a secondary store dashboard using Angular, Material UI, Chart.js, Java, and MySQL, improving application scalability by offloading resource-intensive API calls to the client's database",
            "Decreased concurrent database connection count by up to 25% by identifying and closing unused connections throughout the application, improving overall system stability",
            "Developed, tested, and integrated RESTful APIs in Java leveraging Eclipse Debugger, Postman, and MySQL Workbench to ensure reliable and scalable backend services",
            "Refactored approximately 30% of application pages to implement responsive design, ensuring full mobile compatibility and an improved user experience across devices",
        ],
        icon: React.createElement(CgWorkAlt),
        date: "May 2022 - Apr 2023",
    },
] as const;

export const education = [
    {
        title: "BSc. Software Development",
        company: "Seneca College",
        location: "North York, ON",
        description: ["President's Honour List from 2020-2023"],
        icon: React.createElement(LuGraduationCap),
        date: "Sep 2019 - Aug 2023",
    },
] as const;
