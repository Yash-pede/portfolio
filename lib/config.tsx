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
