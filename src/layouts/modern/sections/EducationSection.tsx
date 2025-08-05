"use client";

import { EducationSection } from "@/layouts/modern/components/EducationCard";
import { Education } from "@/types/schema";
interface Props {
  education: Education[];
}

export default function EducationSectionPage({ education }: Props) {
  if (!education.length) return null;

  return <EducationSection education={education} />;
}
