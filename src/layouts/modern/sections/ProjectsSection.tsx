"use client";

import { ProjectsSection } from "@/layouts/modern/components/ProjectsCard";
import { Project } from "@/types/schema";
interface Props {
  projects: Project[];
  allProjects?: string;
}

export default function ProjectsSectionPage({ projects, allProjects }: Props) {
  if (!projects.length) return null;

  return <ProjectsSection projects={projects} allProjects={allProjects} />;
}
