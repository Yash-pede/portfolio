import SectionHeading from "@/components/layout/SectionHeading";
import { ProjectsCard } from "@/components/ProjectsCard";
import { minorProjects } from "@/lib/config";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  return (
    <section className="flex flex-col text-center w-full h-full justify-center items-center gap-20 mt-20">
      <Card
        as={Link}
        href={"https://youtu.be/KrOePSQGdfE"}
        className="gap-2 md:gap-3 md:w-[76%] w-full bg-transparent border-none shadow-none text-default-600"
      >
        <CardHeader className="flex flex-col justify-start items-start md:flex-row w-full h-full md:justify-between gap-2  md:p-[0.5px]">
          <iframe
            src="https://www.youtube.com/embed/KrOePSQGdfE?autoplay=1&mute=1"
            title="Shrewit"
            frameBorder="50"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-3xl border-5 border-secondary h-[12rem] md:h-[30rem] w-full object-cover"
          ></iframe>
        </CardHeader>
        <CardBody className="gap-5">
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            Shrewit - Supply chain management
          </p>
          <p className="text-base md:text-lg">
            A CRM system for an online manufacturers and distributors. It
            provides all the users a set of tools to manage their business. It
            is a modern and efficient solution for managing all your business
            needs.
          </p>
        </CardBody>
      </Card>

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
