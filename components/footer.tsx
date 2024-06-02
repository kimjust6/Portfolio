import Reveal from "./utils/reveal";

const Footer = () => {
    return (
        <Reveal>
            <footer className="gray-700 flex w-screen justify-center px-10 pb-10 text-center">
                <p>
                    I built this website with Next.js, React, Tailwind, and
                    Framer Motion. The source code is available on my{" "}
                    <a
                        href="https://github.com/kimjust6/Portfolio"
                        className="font-semibold text-indigo-600 underline"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </footer>
        </Reveal>
    );
};

export default Footer;
