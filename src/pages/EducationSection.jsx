"use client";

import { useState, useEffect } from "react";
import { EducationSection } from "@/components/EducationCard/education-section";

export default function EducationSectionPage() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    fetch("/data/education.json")
      .then((res) => res.json())
      .then((data) => setEducation(data));
  }, []);

  if (!education.length) return null;

  return <EducationSection education={education} />;
}
