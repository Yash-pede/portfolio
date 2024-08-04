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
    githubUserId: "Yash-pede",
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

export const GridItems = [
  { title: "Title1", description: "Desc1", id: 1, cname: "row-span-2" },
  { title: "Title2", description: "Desc1", id: 2, cname: "col-span-2     row-span-1" },
  { title: "Title3", description: "Desc1", id: 3, cname: "" },
  {
    title: "Title4",
    description: "Desc1",
    id: 4,
    cname: "col-span-2 row-span-2",
  },
  { title: "Title5 ", description: "Desc1", id: 5, cname: "col-span-2" },
];
