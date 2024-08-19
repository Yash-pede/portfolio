import React from "react";
import About from "@/components/aboutSection/About";
import {
  AboutCardDp,
  AboutCardExtra,
  AboutCardProjects,
  AboutCardToolbox,
  MeetingScheduling,
  Resume,
} from "@/components/aboutSection";
import { Metadata } from "next";
import AboutGrid from "@/components/aboutSection/AboutGrid";

const AboutPage = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-32 mt-20">
      <AboutGrid/>
      <About items={items} />
    </section>
  );
};

export default AboutPage;

const items: {
  className?: string;
  content?: React.ReactNode;
}[] = [
  {
    className: "md:hidden col-span-2 row-span-1",
    content: <AboutCardExtra />,
  },
  {
    className: "md:col-span-1 col-span-1 row-span-1",
    content: <Resume />,
  },
  {
    className: "hidden md:block col-span-2 row-span-1",
    content: <AboutCardExtra />,
  },
  {
    className: "col-span-1 md:col-span-1",
    content: <AboutCardDp />,
  },
  {
    className: "col-span-2 row-span-1",
    content: <MeetingScheduling />,
  },
  {
    className: "col-span-2 md:row-span-2 row-span-1",
    content: <AboutCardToolbox />,
  },
  {
    className: "col-span-2 row-span-1",
    content: <AboutCardProjects />,
  },
];
