import azure from "@/public/logos/azure.svg";
import react from "@/public/logos/react.svg";
import typescript from "@/public/logos/typescript.svg";
import ssms from "@/public/logos/ssms.webp";
import java from "@/public/logos/java.svg";
import postgres from "@/public/logos/postgres.svg";
import docker from "@/public/logos/docker.svg";
import mssql from "@/public/logos/mssql.svg";
import mongodb from "@/public/logos/mongodb.svg";
import postman from "@/public/logos/postman.svg";
import next from "@/public/logos/next.svg";
import csharp from "@/public/logos/csharp.svg";
import dotnet from "@/public/logos/dotnet.svg";
import git from "@/public/logos/git.svg";

export const skillsData = [
    {
        title: "Frontend Development",
        skills: [
            { name: "Next.js", svg: next },
            { name: "React", svg: react },
            { name: "Typescript", svg: typescript },
        ],
    },
    {
        title: "Backend Development",
        skills: [
            { name: "C#", svg: csharp },
            { name: ".NET", svg: dotnet },
            { name: "Java", svg: java },
        ],
    },
    {
        title: "Database Management",
        skills: [
            { name: "Microsoft SQL", svg: mssql },
            { name: "SSMS", svg: ssms },
            { name: "PostgreSQL", svg: postgres },
            { name: "MongoDB", svg: mongodb },
        ],
    },
    {
        title: "Tools & Misc.",
        skills: [
            { name: "Azure", svg: azure },
            { name: "Docker", svg: docker },
            { name: "Git", svg: git },
            { name: "Postman", svg: postman },
        ],
    },
] as const;
