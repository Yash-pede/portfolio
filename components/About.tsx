import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  AboutCardFullPicture,
  AboutCardDp,
  AboutCardProjects,
  AboutCardToolbox,
  MeetingScheduling,
} from "./aboutSection";

const About = () => {
  return (
    <section className="flex flex-col text-center w-full justify-center items-center gap-10">
      <div className="max-w-md flex justify-center items-center flex-col gap-5">
        <p className="text-primary font-medium text-lg">ABOUT</p>
        <p className="text-4xl">
          Here’s what sets me apart and makes me unique
        </p>
      </div>
      <BentoGrid className="md:max-w-4xl w-full mx-auto grid-rows-4 md:grid-rows-3 grid-cols-2 md:grid-cols-4 md:gap-7">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            className={item.className}
            content={item.content}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default About;

const items: {
  className?: string;
  content?: React.ReactNode;
}[] = [
  {
    className: "col-span-1 md:col-span-1 row-span-2",
    content: <AboutCardFullPicture />,
  },
  {
    className: "hidden md:block md:col-span-3",
    content: <MeetingScheduling />,
  },
  {
    className: "md:hidden col-span-2",
    content: <>RESUME</>,
  },
  {
    className: "col-span-2 md:col-span-1",
    content: <AboutCardDp />,
  },
  {
    className: "col-span-3 md:col-span-2 row-span-1 md:row-span-2",
    content: <AboutCardToolbox />,
  },
  {
    className: "col-span-3 md:col-span-2 row-span-1",
    content: <AboutCardProjects />,
  },
];
