"use client";

import { ProjectsSection } from "@/components/ProjectsCard/ProjectsCard";

export default function ProjectsSectionPage({ projects = [] }) {
  if (!projects.length) return null;

  return <ProjectsSection projects={projects} />;
}
