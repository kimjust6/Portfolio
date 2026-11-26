import { socialLinks } from "@/lib/social-links";

export const siteConfig = {
    url: "https://www.jkim.win",
    name: "Justin Kim's Portfolio",
    title: "Justin Kim Full Stack Developer",
    description:
        "Justin Kim is a Full Stack Developer who is passionate about web development. He graduated from Seneca College in 2023, where he acquired his Bachelor of Technology in Software Development.",
    author: {
        name: "Justin Kim",
        jobTitle: "Full Stack Developer",
        url: "https://www.jkim.win",
    },
    socialLinks: [socialLinks.github, socialLinks.linkedin, socialLinks.blog],
    externalSitemaps: ["https://myblog.jkim.win/sitemap.xml"],
} as const;
