import React from "react";
import About from "@/components/aboutSection/About";
import {
  AboutCardDp,
  AboutCardExtra,
  AboutCardProjects,
  AboutCardToolbox,
  MeetingScheduling,
} from "@/components/aboutSection";

import { LucideScrollText } from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section>
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
    content: (
      <div className="w-full h-full grid place-items-center">
        <LucideScrollText className="w-16 h-16" strokeWidth="1.5" />
        <p className="text-2xl ">RESUME</p>
      </div>
    ),
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
    className: "col-span-2 row-span-2",
    content: <AboutCardToolbox />,
  },
  {
    className: "col-span-2 row-span-1",
    content: <AboutCardProjects />,
  },
];
