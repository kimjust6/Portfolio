import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
    // {
    //     name: "Resume",
    //     hash: "#resume",
    // },
] as const;

export const workExperience = [
    {
        title: "Full-Stack Developer",
        company: "Partech Inc.",
        location: "Markham, ON",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - present",
    },

    {
        title: "Student",
        company: "Seneca College",
        location: "North York, ON",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(LuGraduationCap),
        date: "2019 - 2023",
    },
    {
        title: "Project Coordinator",
        company: "Quantech Electrical Contractors Ltd.",
        location: "Thornhill, ON",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(CgWorkAlt),
        date: "2016-2019",
    },
] as const;

export const projectImages = [
    // Stable Prompts 0
    [
        {
            // image: "https://i.imgur.com/s9Bhiop.png",
            image: "https://i.imgur.com/xeVFoJJ.png",
            alt: "Stable Prompts Image 1",
        },
        {
            // image: "https://i.imgur.com/wrwll8I.png.png",
            image: "https://i.imgur.com/g6SIq0k.png",
            alt: "Stable Prompts Image 2",
        },
        {
            // image: "https://i.imgur.com/IJGmP3U.png",
            image: "https://i.imgur.com/bwuW8Fm.png",
            alt: "Stable Prompts Image 3",
        },
    ],

    // Eventure 1
    [
        {
            // image: "https://i.imgur.com/PYzW99t.png",
            image: "https://i.imgur.com/OaWUIRz.png",
            alt: "Eventure 1",
        },
        {
            // image: "https://i.imgur.com/Q0qPMTv.png",
            image: "https://i.imgur.com/PNpfzeF.png",
            alt: "Eventure 2",
        },
        {
            // image: "https://i.imgur.com/bh3RsnO.png",
            image: "https://i.imgur.com/tsgDuJ7.png",
            alt: "Eventure 3",
        },
        {
            // image: "https://i.imgur.com/cYisRkv.png",
            image: "https://i.imgur.com/HgEsw09.png",
            alt: "Eventure 4",
        },
        {
            // image: "https://i.imgur.com/Hv0vcl4.png",
            image: "https://i.imgur.com/RLI1JaG.png",
            alt: "Eventure 5",
        },
        {
            // image: "https://i.imgur.com/5HpmLKL.png",
            image: "https://i.imgur.com/piUX9Pq.png",
            alt: "Eventure 6",
        },
    ],
    // Wordle Clone 2
    [
        {
            // image: "https://i.imgur.com/m0ubjem.png",
            image: "https://i.imgur.com/KkqTgb6.png",
            alt: "Wordle Clone Desktop Image 1",
        },
        {
            // image: "https://i.imgur.com/eLuG71p.png",
            image: "https://i.imgur.com/YbqjVDf.png",
            alt: "Wordle Clone Desktop Image 2",
        },
        {
            // image: "https://i.imgur.com/04eEc5O.png",
            image: "https://i.imgur.com/jbr2twK.png",
            alt: "Wordle Clone Mobile Image 3",
        },
        {
            // image: "https://i.imgur.com/m6f7GEd.png",
            image: "https://i.imgur.com/YWLuf2V.png",
            alt: "Wordle Clone Mobile Image 4",
        },
    ],
    // Blockchain Banking 3
    [
        {
            // image: "https://i.imgur.com/M1Cr3jy.png",
            image: "https://i.imgur.com/HgQWyj8.png",
            alt: "Blockchain Banking Web Application 1",
        },
        {
            // image: "https://i.imgur.com/YtsmSca.png",
            image: "https://i.imgur.com/IDbeaaI.png",
            alt: "Blockchain Banking Web Application 2",
        },
        {
            // image: "https://i.imgur.com/EN3zOft.png",
            image: "https://i.imgur.com/gFXC4VT.png",
            alt: "Blockchain Banking Web Application 3",
        },
        {
            // image: "https://i.imgur.com/eaJnZ95.png",
            image: "https://i.imgur.com/rYwYoxO.png",
            alt: "Blockchain Banking Web Application 4",
        },
    ],
    // Justin's Sushi
    [
        {
            // image: "https://i.imgur.com/OGh27WR.png",
            image: "https://i.imgur.com/hEB1mKw.png",
            alt: "Justin's Sushi Image 1",
        },
        {
            // image: "https://i.imgur.com/6n7t8Kw.png",
            image: "https://i.imgur.com/hQycNPV.png",
            alt: "Justin's Sushi Image 2",
        },
        {
            // image: "https://i.imgur.com/f7u5jWz.png",
            image: "https://i.imgur.com/XLMkLGv.png",
            alt: "Justin's Sushi Image 3",
        },
    ],
    // Movie Tracker
    [
        {
            // image: "https://i.imgur.com/EhfyXJo.png",
            image: "https://i.imgur.com/w53ts1O.png",
            alt: "Movie Tracker Image 1",
        },
        {
            // image: "https://i.imgur.com/YsSWzM6.png",
            image: "https://i.imgur.com/rXavXGY.png",
            alt: "Movie Tracker Image 2",
        },
        {
            // image: "https://i.imgur.com/hrL9SnP.png",
            image: "https://i.imgur.com/XcSAih7.png",
            alt: "Movie Tracker Image 3",
        },
        {
            // image: "https://i.imgur.com/GsrkHpp.png",
            image: "https://i.imgur.com/Dnc0Qiz.png",
            alt: "Movie Tracker Image 3",
        },
    ],
] as const;

export const videos = [
    // Banano Blockchain
    [
        {
            video: "https://www.youtube.com/watch?v=WnsjEKPZEYk",
            alt: "Youtube Demo",
        },
    ],
] as const;

export const projectsData = [
    {
        title: "Stable Prompts Full Stack Application",
        tech: ["Next.js", "React", "MongoDB", "Oauth2", "Tailwind", "CSS"],
        description: `This Next.js full stack application allows users to sign in with their existing google account and create, update, 
        and delete prompts for Stable Diffusion. Posts are saved to MongoDB and can be filtered on the home page. Tip: When trying the demo, 
        you may need to refresh the page to warm up the MongoDB server.`,
        codeURL: "https://github.com/kimjust6/StablePrompts",
        liveDemoURL: "https://prompts-mocha-seven.vercel.app",
        carouselImage: projectImages[0],
    },
    {
        title: "Eventure Full Stack Mobile Application (Capstone)",
        tech: ["Angular", "Ionic", "Agile", "SCRUM", "Firebase", "Firestore", "tomtom API"],
        description: `Completed this project in 6 sprints over an 8 month period. This mobile app
            lets users create and join events near them. Users are also able to search
            for businesses and other points of interest through the tomtom API. Eventure
            was developed using the Agile Software Development and coded using angular.
            User information is stored in a Firebase database.`,
        codeURL: "https://github.com/kimjust6/Eventure",
        videoDemoURL: "https://www.youtube.com/watch?v=aNnlid6Ti_4",
        carouselImage: projectImages[1],
    },
    {
        title: "AWS Backend Microservice API",
        tech: [
            "Node.js",
            "AWS",
            "Cognito",
            "S3",
            "DynamoDB",
            "Docker Compose",
            "Github Actions",
            "Jest",
        ],
        description: `This is a backend microservice that includes automated testing with a CI/CD pipeline using Github Actions and 
        automated deployment to the cloud (AWS) using DockerHub.  This application takes advantage of AWS Cognito allowing users to register and 
        login with their emails. Once logged in, users can call the microservice's api endpoint to perform CRUD operations on text or images 
        stored on S3.  In addition to this, metadata is stored on DynamoDB.  `,
        codeURL: "https://github.com/kimjust6/fragments",
        videoDemoURL: "https://www.youtube.com/watch?v=WnsjEKPZEYk",
        // carouselImage: projectImages[3],
        carouselImage: "",
    },
    {
        title: "Wordle Clone Frontend Application",
        tech: ["Angular", "Bootstrap", "CSS"],
        description: `This is my version of the popular game Wordle. I styled the website with responsive 
            design in mind. My version of Wordle makes use of emitters, localstorage, and variable css. This 
            application has a dark theme as well as a mobile view of the webpage. Checkout the live demo below.`,
        codeURL: "https://github.com/kimjust6/Wordle-Clone",
        liveDemoURL: "https://wordle-xi.vercel.app/game/1",
        carouselImage: projectImages[2],
    },

    {
        title: "Blockchain Banking Full Stack Web Application",
        tech: ["Spring Boot", "Java", "SQL", "Docker", "Thymeleaf", "jNano", "Google ZXing"],
        description: `This is a banking application that uses cryptocurrencies as the store of
            value between accounts. Transactions are done on a live blockchain and done
            in real time. We used the Spring Boot framework for the front end and Java
            for the backend. Account information was stored and encrypted on a
            postgreSQL server. To broadcast transactions, we spun up a banano
            (cryptocurrency) node in a docker container.`,
        codeURL: "https://github.com/kimjust6/Banking-Web-App",
        videoDemoURL: "https://www.youtube.com/watch?v=uKlhKMTh05k",
        carouselImage: projectImages[3],
    },
    {
        title: "Justin's Sushi Front End Application",
        tech: ["React", "Tailwind", "Redux"],
        description: `This is a sushi restaurant website coded with React and styled with Tailwind.  Redux is used to pass values between components.`,
        codeURL: "https://github.com/kimjust6/Justins-Sushi",
        liveDemoURL: "https://justins-sushi.vercel.app/",
        carouselImage: projectImages[4],
    },
    {
        title: "Movie Tracker List Full Stack App (WIP)",
        tech: ["Angular", "Material", "Firebase", "TMDB Api"],
        description: `This is a Movie tracking website that allows users to track what movies they have seen. It uses the TMDB api and firestore to track and save statistics from movies you have watched.`,
        codeURL: "https://github.com/kimjust6/DankMovies",
        liveDemoURL: "https://dank-movies.vercel.app/home",
        carouselImage: projectImages[5],
    },
] as const;

export const showMoreProjectsList = [
    {
        title: "Portfolio Front End Application",
        tech: ["React.js", "MaterialUI", "CSS"],
        description: `This portfolio website is coded in React.js and CSS to showcase my technical
            knowledge and application. The website was styled with responsive design in
            mind.`,
        codeURL: "https://github.com/kimjust6/portfolio",
        liveDemoURL: "https://www.justink.dev/",
        // image: "https://i.imgur.com/ITIYoji.png",
        image: "https://i.imgur.com/inIWya0.png",
    },
    {
        title: "Boulder Dash Clone",
        tech: ["Java"],
        description: `In this project, I recreated the classic arcade game "Boulder Dash". In this
            game, the player will travel through the maze and collect diamonds and
            attempt to proceed to the next level. The level is loaded from a text file
            and all the game logic is coded in Java.`,
        codeURL: "https://github.com/kimjust6/boulderdash",
        videoDemoURL: "https://www.youtube.com/watch?v=kSDaNuoXWMQ",
        image: "https://i.imgur.com/a3yG8xX.png",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;