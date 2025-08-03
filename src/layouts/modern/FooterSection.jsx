"use client";

import { Footer } from "@/components/footerCard/footer";

export default function FooterSection({ name, socials }) {
  if (!name || !socials) return null;

  const footerData = {
    name: name,
    email: socials.email,
    githubUrl: socials.githubUrl,
    linkedinUrl: socials.linkedinUrl
  };
  return <Footer data={footerData} />;
}
