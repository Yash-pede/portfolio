import { HoverEffect } from '@/components/ProjectsCard';
import { projects } from '@/lib/config';
import React from 'react'

const ProjectsPage = () => {
  return (
    <HoverEffect items={projects} />
  )
}

export default ProjectsPage;