import Reveal from "./utils/reveal";

const Footer = () => {
    return (
        <Reveal>
            <footer className="w-screen gray-700 px-10 text-center flex justify-center pb-10 ">
                <p>
                    I built this website with Next.js, React, Tailwind, and Framer Motion. The
                    source code is available on my{" "}
                    <a
                        href="https://github.com/kimjust6/Portfolio"
                        className=" text-indigo-600 underline font-semibold"
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
