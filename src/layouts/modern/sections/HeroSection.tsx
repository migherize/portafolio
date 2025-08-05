import HeroSectionCard from "@/layouts/modern/components/HeroCard";
import { PersonalInfo } from "@/types/schema";

interface HeroSectionProps {
  heroData: PersonalInfo;
}

export default function HeroSection({ heroData }: HeroSectionProps) {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 py-12 px-6 pt-16">
      <HeroSectionCard
        heroData={heroData}
        onScrollToProjects={scrollToProjects}
      />
    </section>
  );
}
