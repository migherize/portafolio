"use client";

import { EducationSection } from "@/components/EducationCard/education-section";

export default function EducationSectionPage({ education = [] }) {
  if (!education.length) return null;

  return <EducationSection education={education} />;
}
