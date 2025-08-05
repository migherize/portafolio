"use client";

import { Footer } from "@/layouts/modern/components/footerCard";
import { Socials, Contact, FooterData } from "@/types/schema";

interface FooterSectionProps {
  name: string;
  socials: Socials;
  contact: Contact;
}

export default function FooterSection({ name, socials, contact }: FooterSectionProps) {
  if (!name || !socials) return null;

  const footerData: FooterData = {
    name: name,
    email: contact.email,
    githubUrl: socials.github,
    linkedinUrl: socials.linkedin
  };
  return <Footer data={footerData} />;
}
