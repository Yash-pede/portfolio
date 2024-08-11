import { HoverEffect } from "@/components/ProjectsCard";
import { MinorEffect } from "@/components/MinorProjectsCard";
import { projects, minorProjects } from "@/lib/config";
import React from "react";

const ProjectsPage = () => {
  return (
    <div>
      <HoverEffect items={projects} />

      <div className="pt-20">
        <p className="text-4xl flex justify-center pb-10">Minor Projects</p>
        <MinorEffect items={minorProjects} />
      </div>
    </div>
  );
};

export default ProjectsPage;
