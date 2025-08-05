"use client";

import { ContactSection } from "@/components/ContactCard/ContactCard";

export default function ContactSectionPage({ phoneData, emailData }) {
  if (!phoneData || !emailData) return null;

  const combinedData = { phone: phoneData, email: emailData };

  return <ContactSection data={combinedData} />;
}
