import SectionHeading from "@/components/layout/SectionHeading";
import { ProjectsCard } from "@/components/ProjectsCard";
import { ImagesSlider } from "@/components/ui/images-slider";
import { projects, minorProjects } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

const ProjectsPage = () => {
  return (
    <section>
      {/* Always use section tag to specify a section i.e in a page.tsx file */}
      {/* We can also use something like this for a cool looking image and projet */}
      <Card
        className={cn(
          "gap-2 md:gap-3 bg-transparent border-none shadow-none text-default-600"
        )}
      >
        <CardHeader className="flex flex-col justify-start items-start md:flex-row w-full h-full md:justify-between gap-2">
          <ImagesSlider images={images} className="h-[30rem]" />
        </CardHeader>
        <CardBody className="gap-5">
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            Title
          </p>
          <p className="text-base md:text-lg">Description</p>
        </CardBody>
      </Card>
      <ProjectsCard items={projects} className="lg:w-[900px]" />
      <div className="flex flex-col text-center w-full justify-center items-center gap-10 mt-20">
        <SectionHeading title="Fun Projects" subtitle="Minor Projects" />
        <ProjectsCard
          items={minorProjects}
          containerClassName="flex flex-wrap justify-center gap-3 items-center flex-row"
          className=" w-[40%]"
          showFooter
        />
      </div>
    </section>
  );
};

export default ProjectsPage;
const images = [
  "/images/HomeScreen.png",
  "/images/HomeScreen.png",
  "/images/HomeScreen.png",
  "/images/HomeScreen.png",
  "/images/HomeScreen.png",
];
