import Link from "next/link";
import { BsEnvelopeFill, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { IconType } from "react-icons";
import Reveal from "./utils/reveal";

const socialLinks: { href: string; icon: IconType; label: string; target?: string }[] = [
    { href: "https://github.com/kimjust6",              icon: BsGithub,      label: "GitHub",    target: "_blank" },
    { href: "https://www.linkedin.com/in/justin-kim6/", icon: BsLinkedin,    label: "LinkedIn",  target: "_blank" },
    { href: "mailto:kimjust6@gmail.com",                icon: BsEnvelopeFill,label: "Email" },
    { href: "https://instagram.com/milklatteteas",      icon: BsInstagram,   label: "Instagram", target: "_blank" },
];

const Footer = () => {
    return (
        <footer className="bg-amber-200/95 bg-clip-padding py-10 opacity-80 dark:bg-gray-800">
            <div className="h-0 w-100 bg-gray-200 dark:bg-gray-600"></div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    {/* Branding / Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-sm">
                            © {new Date().getFullYear()} Justin Kim. All rights
                            reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6 text-xl">
                        {socialLinks.map(({ href, icon: Icon, label, target }) => (
                            <Link
                                key={label}
                                href={href}
                                target={target}
                                aria-label={label}
                                className="transition-colors hover:scale-105"
                            >
                                <Icon />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
