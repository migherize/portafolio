import { useEffect, useState } from "react";
import HeroSectionCard from "@/components/HeroSectionCard/HeroSectionCard.jsx";

function HeroSection() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch("/data/aboutme.json")
      .then((res) => res.json())
      .then(setAboutData)
      .catch((err) => console.error("Error cargando About Me:", err));
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("proyectos");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (!aboutData) {
    return (
      <section className="min-h-screen flex items-center justify-center py-12 px-6 bg-white dark:bg-neutral-900">
        <p className="text-gray-700 dark:text-gray-300">Cargando...</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 py-12 px-6">
      <HeroSectionCard
        name={aboutData.name}
        title={aboutData.title}
        bio={aboutData.bio}
        profileImage={aboutData.profileImage}
        backgroundImage={aboutData.backgroundImage}
        githubUrl={aboutData.githubUrl}
        linkedinUrl={aboutData.linkedinUrl}
        email={aboutData.email}
        resumeUrl={aboutData.resumeUrl}
        onScrollToProjects={scrollToProjects}
      />
    </section>
  );
}

export default HeroSection;
