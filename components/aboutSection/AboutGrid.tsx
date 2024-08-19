import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  arrowRightDown,
  me1,
  meBro,
  meFly,
  meGym,
  meMom,
  meSpeech,
} from "@/public/images";
import { Card, CardBody, CardFooter, CardHeader, Link } from "@nextui-org/react";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { isMobile } from "react-device-detect";

const AboutGrid = () => {
  return (
    <div className="grid w-full md:w-4/5 h-full grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 auto-rows-min justify-center overflow-hidden p-0 mb-7 md:mb-10">
      <div className="flex flex-col gap-24 justify-start items-center">
        <ImageWraper src={meBro} alt="meBro" />
        <Card className="relative bg-transparent ">
          <CardHeader className="text-2xl">Early Coding Adventures</CardHeader>
          <CardBody className="text-default-500 text-lg">
            I started my programming journey with C and C++ in school. When I
            got my first laptop, I was eager to explore the world of coding. I
            developed several projects, including a Flappy Bird clone and mods
            for GTA San Andreas, which allowed me to express my creativity and
            hone my skills. <br /> <br /> These early experiences ignited my
            passion for software development and set the stage for my future
            endeavors.
          </CardBody>
        </Card>
        <ImageWraper src={me1} alt="meBro" />
        <Card className="relative bg-transparent">
          <CardHeader className="text-2xl">
            Transition to Web Development
          </CardHeader>
          <CardBody className="text-default-500 text-lg">
            While teaching C and C++ in my community, I realized my earnings
            were limited, and I wanted to create impactful projects that people
            could truly use. This desire led me to explore web development,
            where I saw the potential to build real-world applications.
            <br />
            <br />I immersed myself in learning React, Next.js, and PostgreSQL,
            which opened up exciting opportunities to develop interactive and
            user-friendly websites. Additionally, I became fascinated by 3D web
            technologies like Three.js, further fueling my passion for creating
            meaningful digital experiences.
          </CardBody>
        </Card>
        <ImageWraper src={meSpeech} alt="meBro" className="hidden md:block" />
      </div>
      <div className="flex flex-col gap-24 justify-start items-center">
        <Card className="bg-transparent p-10 md:pt-[7rem] relative hidden md:block">
          <CardBody>
            <p className="text-xl ">
              Hey there! Let me quickly tell you about myself and what I enjoy
              doing.
            </p>
          </CardBody>
          <CardFooter className="justify-start flex-col !p-0">
            <p className="">
              <Image
                src={ArrowLeft}
                alt="ArrowLeft"
                className="absolute left-0 "
              />
              psst…Take a Look
              <Image
                src={arrowRightDown}
                alt="ArrowLeft"
                className="absolute right-3 bottom-2"
              />
            </p>
          </CardFooter>
        </Card>
        <ImageWraper src={meGym} alt="meBro" />
        <Card className="relative bg-transparent md:pt-[15rem]">
          <CardHeader className="text-2xl">
            Community Teaching Experience
          </CardHeader>
          <CardBody className="text-default-500 text-lg">
            After my initial coding adventures, I began teaching C and C++
            classes in my community. This experience was incredibly rewarding,
            as I had the opportunity to inspire aspiring programmers and help
            them grasp essential coding concepts.
            <br /> <br />
            Through hands-on lessons, I created a supportive environment where
            students could explore their creativity and develop their skills.
            Not only did I earn some extra income, but I also reinforced my own
            understanding of programming while witnessing the growth and success
            of my students. This journey deepened my appreciation for the impact
            of education in technology.
          </CardBody>
        </Card>
        <ImageWraper src={isMobile ? meSpeech : meFly} alt="meBro" />
        <Card className="relative bg-transparent">
          <CardHeader className="text-2xl">What I’m doing now.</CardHeader>
          <CardBody className="text-default-500 text-lg">
            Currently, I am working as a full-stack engineer at <Link href={"https://momentum.sh"} isExternal color="primary" isBlock>Momentum.sh</Link>,
            where I contribute to innovative projects and enhance my skills in a
            dynamic environment. Recently, I completed a freelance project
            developing a CRM software for a pharmaceutical company to help them
            manage inventory and streamline their operations. This experience
            not only allowed me to apply my technical expertise but also
            reinforced my commitment to creating practical solutions that meet
            real-world needs.
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AboutGrid;

const ImageWraper = ({
  src,
  className,
  alt,
}: {
  src: StaticImageData;
  className?: string;
  alt?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt ? alt : ""}
      className={cn(
        "rounded-3xl border-5 border-secondary h-[37rem] md:h-[45rem] w-full object-cover",
        className
      )}
    />
  );
};
