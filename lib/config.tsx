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

export const GridItems=[
  {title: 'Title1', description:'Desc1', id:1, className:" w-max"},
  {title: 'Title2', description:'Desc2', id:2, className:"lg:col-span-2 md:col-span-3 md:row-span-2"},
  {title: 'Title3', description:'Desc3', id:3, className:"lg:col-span-2 md:col-span-3 md:row-span-2"},
  {title: 'Title4', description:'Desc4', id:4, className:"lg:col-span-2 md:col-span-3 md:row-span-1"},
  {title: 'Title5', description:'Desc5', id:5, className:"lg:col-span-2 md:col-span-3 md:row-span-1"},

];
