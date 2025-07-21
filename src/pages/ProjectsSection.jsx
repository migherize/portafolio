"use client";

import { useState, useEffect } from "react";
import { ProjectsSection } from "@/components/ProjectsCard/projects-section";

export default function ProjectsSectionPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  if (!projects.length) return null;

  return <ProjectsSection projects={projects} />;
}
