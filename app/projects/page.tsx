import SectionHeading from "@/components/layout/SectionHeading";
import { ProjectsCard } from "@/components/ProjectsCard";
import { projects, minorProjects } from "@/lib/config";
import React from "react";

const ProjectsPage = () => {
  return (
    <div>
      <ProjectsCard items={projects} className="lg:w-[900px]" />

      <div className="flex flex-col text-center w-full justify-center items-center gap-10 mt-20">
        <SectionHeading title="Fun Projects" subtitle="Minor Projects" />
        <ProjectsCard items={minorProjects} containerClassName="flex flex-wrap justify-center gap-3 items-center flex-row"  className=" w-[40%] "   />
      </div>
    </div>
  );
};

export default ProjectsPage;
