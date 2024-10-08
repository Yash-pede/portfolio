import SectionHeading from "@/components/layout/SectionHeading";
import { ProjectsCard } from "@/components/ProjectsCard";
import { ImagesSlider } from "@/components/ui/images-slider";
import { projects, minorProjects } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  return (
    <section className="flex flex-col text-center w-full h-full justify-center items-center gap-20 mt-20">
      {projects.map((item, index) => (
        <Card as={Link}
          key={index} href={item.link}
          className="gap-2 md:gap-3 md:w-[76%] w-full bg-transparent border-none shadow-none text-default-600"
        >
          <CardHeader className="flex flex-col justify-start items-start md:flex-row w-full h-full md:justify-between gap-2  md:p-[0.5px]">
            <ImagesSlider images={item.src} className="h-[30rem]" />
          </CardHeader> 
          <CardBody className="gap-5">
            <p className="text-xl md:text-2xl text-foreground font-semibold">
              {item.title}
            </p>
            <p className="text-base md:text-lg">{item.description}</p>
          </CardBody>
        </Card>
      ))}

      <div className="flex flex-col text-center w-full h-full justify-center items-center gap-10 mt-20">
        <SectionHeading title="Fun Projects" subtitle="More Projects" />
        <ProjectsCard
          items={minorProjects}
          containerClassName="flex flex-wrap justify-center gap-3 items-center md:flex-row"
          className="md:w-[40%] w-full"
          // showFooter
        />
      </div>
    </section>
  );
};

export default ProjectsPage;
