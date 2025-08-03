"use client";

import { ProjectsSection } from "@/components/ProjectsCard/projects-section";

export default function ProjectsSectionPage({ projects = [] }) {
  if (!projects.length) return null;

  return <ProjectsSection projects={projects} />;
}
