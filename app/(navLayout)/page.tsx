import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import AnimatePresenceWrapper from "@/components/utils/animate-presence-wrapper";
import Divider from "@/components/utils/divider";

export default function Home() {
    return (
        <AnimatePresenceWrapper>
            <main>
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
        </AnimatePresenceWrapper>
    );
}
