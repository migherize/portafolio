"use client";

import { Footer } from "@/components/footerCard/footer";
import { useEffect, useState } from "react";

export default function FooterSection() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch("/data/footer.json")
      .then((res) => res.json())
      .then((data) => setFooterData(data));
  }, []);

  if (!footerData) return null;

  return <Footer data={footerData} />;
}
