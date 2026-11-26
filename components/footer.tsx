import Link from "next/link";
import {
    BsEnvelopeFill,
    BsGithub,
    BsInstagram,
    BsLinkedin,
} from "react-icons/bs";
import { IconType } from "react-icons";
import { socialLinks as profileLinks } from "@/lib/social-links";

const socialLinks: {
    href: string;
    icon: IconType;
    label: string;
    target?: string;
}[] = [
    {
        href: profileLinks.github,
        icon: BsGithub,
        label: "GitHub",
        target: "_blank",
    },
    {
        href: profileLinks.linkedin,
        icon: BsLinkedin,
        label: "LinkedIn",
        target: "_blank",
    },
    {
        href: profileLinks.email,
        icon: BsEnvelopeFill,
        label: "Email",
    },
    {
        href: profileLinks.instagram,
        icon: BsInstagram,
        label: "Instagram",
        target: "_blank",
    },
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
                        {socialLinks.map(
                            ({ href, icon: Icon, label, target }) => (
                                <div
                                    key={label}
                                    className="group relative flex flex-col items-center"
                                >
                                    <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 group-hover:block">
                                        {/* Bubble */}
                                        <span className="block rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white dark:bg-gray-600">
                                            {label}
                                        </span>
                                        {/* Triangle caret */}
                                        <span className="mx-auto block h-0 w-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800 dark:border-t-gray-600" />
                                    </span>
                                    <Link
                                        href={href}
                                        target={target}
                                        aria-label={label}
                                        className="transition-transform hover:scale-110"
                                    >
                                        <Icon />
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
