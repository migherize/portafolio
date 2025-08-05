"use client";

import { ContactSection } from "@/layouts/modern/components/ContactCard";
import { ContactData } from "@/types/schema";

export default function ContactSectionPage({ phone, email }: ContactData) {
  if (!phone || !email) return null;

  const combinedData: ContactData = { phone, email };

  return <ContactSection data={combinedData} />;
}
