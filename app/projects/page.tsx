import SectionHeading from "@/components/layout/SectionHeading";
import { ProjectsCard } from "@/components/ProjectsCard";
import { minorProjects, majorProjects } from "@/lib/config";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ProjectsPage = () => {
  return (
    <section className="flex flex-col text-center w-full h-full justify-center items-center gap-20 mt-20">
      {majorProjects.map((value) => (
        <>
          <Card
            as={Link}
            href={`https://youtu.be/${value.ytVideoId}`}
            className="gap-2 md:gap-3 md:w-[76%] w-full bg-transparent border-none shadow-none text-default-600"
          >
            <CardHeader className="flex flex-col justify-start items-start md:flex-row w-full h-full md:justify-between gap-2  md:p-[0.5px]">
              <iframe
                src={`https://www.youtube.com/embed/${value.ytVideoId}?autoplay=1&mute=1`}
                title="Shrewit"
                frameBorder="50"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-3xl border-5 border-secondary h-[12rem] md:h-[30rem] w-full object-cover"
              ></iframe>
            </CardHeader>
            <CardBody className="gap-5">
              <p className="text-xl md:text-2xl text-foreground font-semibold">
                {value.title}
              </p>
              <p className="text-base md:text-lg">{value.description}</p>
            </CardBody>
          </Card>
        </>
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
