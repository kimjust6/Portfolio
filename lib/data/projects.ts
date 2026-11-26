export const projectImages = [
    // Stable Prompts 0
    [
        {
            image: "https://i.imgur.com/xeVFoJJ.png",
            alt: "Stable Prompts Image 1",
        },
        {
            image: "https://i.imgur.com/g6SIq0k.png",
            alt: "Stable Prompts Image 2",
        },
        {
            image: "https://i.imgur.com/bwuW8Fm.png",
            alt: "Stable Prompts Image 3",
        },
    ],
    // Eventure 1
    [
        {
            image: "https://i.imgur.com/OaWUIRz.png",
            alt: "Eventure 1",
        },
        {
            image: "https://i.imgur.com/PNpfzeF.png",
            alt: "Eventure 2",
        },
        {
            image: "https://i.imgur.com/tsgDuJ7.png",
            alt: "Eventure 3",
        },
        {
            image: "https://i.imgur.com/HgEsw09.png",
            alt: "Eventure 4",
        },
        {
            image: "https://i.imgur.com/RLI1JaG.png",
            alt: "Eventure 5",
        },
        {
            image: "https://i.imgur.com/piUX9Pq.png",
            alt: "Eventure 6",
        },
    ],
    // Wordle Clone 2
    [
        {
            image: "https://i.imgur.com/KkqTgb6.png",
            alt: "Wordle Clone Desktop Image 1",
        },
        {
            image: "https://i.imgur.com/YbqjVDf.png",
            alt: "Wordle Clone Desktop Image 2",
        },
        {
            image: "https://i.imgur.com/jbr2twK.png",
            alt: "Wordle Clone Mobile Image 3",
        },
        {
            image: "https://i.imgur.com/YWLuf2V.png",
            alt: "Wordle Clone Mobile Image 4",
        },
    ],
    // Blockchain Banking 3
    [
        {
            image: "https://i.imgur.com/HgQWyj8.png",
            alt: "Blockchain Banking Web Application 1",
        },
        {
            image: "https://i.imgur.com/IDbeaaI.png",
            alt: "Blockchain Banking Web Application 2",
        },
        {
            image: "https://i.imgur.com/gFXC4VT.png",
            alt: "Blockchain Banking Web Application 3",
        },
        {
            image: "https://i.imgur.com/rYwYoxO.png",
            alt: "Blockchain Banking Web Application 4",
        },
    ],
    // Justin's Sushi 4
    [
        {
            image: "https://i.imgur.com/hEB1mKw.png",
            alt: "Justin's Sushi Image 1",
        },
        {
            image: "https://i.imgur.com/hQycNPV.png",
            alt: "Justin's Sushi Image 2",
        },
        {
            image: "https://i.imgur.com/XLMkLGv.png",
            alt: "Justin's Sushi Image 3",
        },
    ],
    // Movie Tracker 5
    [
        {
            image: "https://i.imgur.com/w53ts1O.png",
            alt: "Movie Tracker Image 1",
        },
        {
            image: "https://i.imgur.com/rXavXGY.png",
            alt: "Movie Tracker Image 2",
        },
        {
            image: "https://i.imgur.com/XcSAih7.png",
            alt: "Movie Tracker Image 3",
        },
        {
            image: "https://i.imgur.com/Dnc0Qiz.png",
            alt: "Movie Tracker Image 3",
        },
    ],
    // Portfolio 6
    [
        {
            image: "https://i.imgur.com/wePpa2n.png",
            alt: "Next Portfolio 1",
        },
    ],
    // Dank Movies 7
    [
        {
            image: "https://i.imgur.com/UBQSwd1.png",
            alt: "Dank Movies",
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
        and delete prompts for Stable Diffusion. Posts are saved to MongoDB and can be filtered on the home page.`,
        codeURL: "https://github.com/kimjust6/StablePrompts",
        liveDemoURL: "https://prompts.justink.dev",
        carouselImage: projectImages[0],
    },
    {
        title: "Personal Blog",
        tech: [
            "Vue.js",
            "Petite-vue",
            "PocketPages",
            "Pocketbase (SQLite)",
            "Tailwind",
            "DaisyUI",
        ],
        description: `A personal blog platform built with Petite-vue, PocketPages, and DaisyUI, leveraging PocketBase for the database and EJS for server-side rendering. It features a fully responsive, modern user interface with clean navigation and layout.`,
        codeURL: "https://github.com/kimjust6/pocket-blog",
        liveDemoURL: "https://myblog.jkim.win/",
        carouselImage: [
            {
                image: "/personal-blog.webp",
                alt: "Personal Blog Home Page",
            },
        ],
    },
    {
        title: "Eventure Full Stack Mobile Application (Capstone)",
        tech: [
            "Angular",
            "Ionic",
            "Agile",
            "SCRUM",
            "Firebase",
            "Firestore",
            "tomtom API",
        ],
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
        title: "Pocket Movies",
        tech: [
            "Alpine.js",
            "DaisyUI",
            "Tailwind",
            "TMDB API",
            "Google Oauth2",
            "Pocketbase (SQLite)",
        ],
        description: `Pocket Movies lets users track their watched movies and share them with friends. Users can sign in with their google account and add movies to their watchlist.`,
        codeURL: "https://github.com/kimjust6/pocket-movies",
        liveDemoURL: "https://movie.jkim.win/",
        carouselImage: projectImages[7],
    },
    {
        title: "Justin Kim's Portfolio ",
        tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
        description: `I created my portfolio with Next.js to showcase my work experience and knowledge of web frameworks such as React/Next.js.`,
        codeURL: "https://github.com/kimjust6/Portfolio",
        liveDemoURL: "https://www.jkim.win/",
        carouselImage: projectImages[6],
    },
    {
        title: "Blockchain Banking Full Stack Web Application",
        tech: [
            "Spring Boot",
            "Java",
            "SQL",
            "Docker",
            "Thymeleaf",
            "jNano",
            "Google ZXing",
        ],
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
] as const;

export const showMoreProjectsList = [
    {
        title: "Portfolio Front End Application",
        tech: ["React.js", "MaterialUI", "CSS"],
        description: `This portfolio website is coded in React.js and CSS to showcase my technical
            knowledge and application. The website was styled with responsive design in
            mind.`,
        codeURL: "https://github.com/kimjust6/portfolio",
        liveDemoURL: "https://www.jkim.win/",
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
