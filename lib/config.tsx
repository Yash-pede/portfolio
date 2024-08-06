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
  {
    route: "/projects",
    title: [
      `A collection of my`,
      `favorite works`,
    ],
  },
  {
    route: "/toolbox",
    title: [
      `Hardware and software`,
      `I use on a daily basis.`,
    ],
  },
  {
    route: "/chanelog",
    title: [
      `Changelog`,
      `Here's whats new!`,
    ],
  },
  {
    route: "/connections",
    title: [
      `Connections.`,
      `Here are some remarkable individuals I have and I would like to meet in person`,
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


export const projects = [
  {
    title: "ideapad",
    description:
      "A technology company that builds economic infrastructure for the internet.",
  },
  {
    title: "Samsung",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    title: "Monitor",
    description:
      "A 60 1080x1920p monitor that I use for work and gaming.",
  },
  {
    title: "Dell",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    title: "intel",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  },
];
