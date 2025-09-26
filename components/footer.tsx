import Link from "next/link";
import {
    BsEnvelopeFill,
    BsGithub,
    BsInstagram,
    BsLinkedin,
} from "react-icons/bs";

import Reveal from "./utils/reveal";

const Footer = () => {
    return (
        <Reveal>
            <footer className="bg-amber-200 bg-opacity-95 bg-clip-padding py-10 opacity-80 dark:bg-gray-800">
                <div className="w-100 h-0 bg-gray-200 dark:bg-gray-600"></div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        {/* Branding / Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-sm">
                                © {new Date().getFullYear()} Justin Kim. All
                                rights reserved.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6 text-xl">
                            <Link
                                href="https://github.com/kimjust6"
                                target="_blank"
                                className="transition-all transition-colors hover:scale-105"
                            >
                                <BsGithub />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/yourusername"
                                target="_blank"
                                className="transition-all transition-colors hover:scale-105"
                            >
                                <BsLinkedin />
                            </Link>
                            <Link
                                href="mailto:kimjust6@gmail.com"
                                className="transition-all transition-colors hover:scale-105"
                            >
                                <BsEnvelopeFill />
                            </Link>
                            <Link
                                href="https://instagram.com/milklatteteas"
                                target="_blank"
                                className="transition-all transition-colors hover:scale-105"
                            >
                                <BsInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </Reveal>
    );
};

export default Footer;
