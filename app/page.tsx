"use client";
import { AnimatePresence } from "framer-motion";
import Intro from "@/components/intro";
import About from "@/components/about";
import Divider from "@/components/utils/divider";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
    return (
        <AnimatePresence>
            <main className="">
                <Intro />
                <Divider />
                <About />
                <Divider />
                <Experience />
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
