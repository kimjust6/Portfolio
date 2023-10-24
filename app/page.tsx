"use client";
import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Divider from "@/components/utils/divider";
import { AnimatePresence } from "framer-motion";

export default function Home() {
    // document.documentElement.classList.add("dark");
    return (
        <AnimatePresence>
            <main className="">
                <Intro />
                <Divider />
                <About />
                <Divider />
                <Experience />
                <Divider />
                <Education />
                <Divider />
                <Skills />
                <Divider />
                <Projects />
                <Divider />
                <Contact />
            </main>
        </AnimatePresence>
    );
}
