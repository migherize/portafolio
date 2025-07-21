"use client";

import { ContactSection } from "@/components/ContactCard/contact-section";
import { useEffect, useState } from "react";

export default function ContactSectionPage() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    fetch("/data/contact.json")
      .then((res) => res.json())
      .then((data) => setContactData(data));
  }, []);

  if (!contactData) return null;

  return <ContactSection data={contactData} />;
}
