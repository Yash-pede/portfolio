import { Github, Linkedin, Twitter } from "lucide-react";

export const SiteConfig = {
  site: {
    name: "Name",
    description: "a portfolio",
  },
  user: {
    firstName: "firstName",
    lastName: "lastName",
    email: "name@name.com",
    username: "username",
    socials: {
      githubUserId: "Yash-pede",
      linkedInUserId: "Yash-pede",
    },
    schedulerLink: "https://calendar.app.google/Wbqq35kvsBVQnND26",
  },
  title: "ACME",
};

export const NavbarItems = [
  {
    title: "Home",
    color: "foreground",
  },
  {
    title: "About",
  },
  {
    title: "Projects",
    color: "foreground",
  },
];

export const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "TailwindCSS",
  "Git",
  "GitHub",
  "Figma",
  "Framer Motion",
  "Supabase",
  "PostgreSQL",
  "Vercel",
  "TailwindCSS",
];

export const HeroTitleData = [
  {
    route: "/",
    title: [
      `Hey, I'm ${SiteConfig.user.firstName}!`,
      "Welcome to my corner of the internet!",
    ],
  },
  {
    route: "/about",
    title: [
      `Good ${new Date().getHours() > 12 ? "morning" : "evening"}!`,
      `I'm ${SiteConfig.user.firstName}, an experienced frontend developer.`,
    ],
  },
];

export const GithubYears = [2024, 2023, 2022];

export const footerOptions = [
  {
    title: "General",
    routes: [
      {
        name: "Home",
        route: "/",
      },
      {
        name: "About",
        route: "/about",
      },
      {
        name: "Projects",
        route: "/projects",
      },
    ],
  },
  {
    title: "Specifics",
    routes: [
      {
        name: "Toolbox",
        route: "/toolbox",
      },
      {
        name: "Products",
        route: "/products",
      },
    ],
  },
  {
    title: "Extra",
    routes: [
     {
        name: "Chanelog",
        route: "/chanelog",
      },
      {
        name: "Connections",
        route: "/connections",
      },
      {
        name: "Resume",
        route: "/resume",
      },
      {
        name: "Snippets",
        route: "/snippets",
      },
    ],
  },
];

export const socialLinks = [
  {
    title: "Github",
    icon: <Github />,
    url: "https://github.com/Yash-pede",
  },
  {
    title: "LinkedIn",
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/yash-pede/",
  },
  {
    title: "Twitter",
    icon: <Twitter />,
    url: "https://x.com/vo_id8",
  },
];
