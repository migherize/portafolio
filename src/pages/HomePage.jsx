import useDarkMode from "@/hooks/useDarkMode";
import { Navigation } from "@/components/Navigation/Navigation";
import HeroSection from "@/pages/HeroSection";
import AboutMeSection from "@/pages/AboutMeSection";
import TechStackPageSection from "@/pages/TechStackPage";
import CerticatesSection from "@/pages/Certificates";
import ProjectsSection from "@/pages/Projects";
import ExperienceListSection from "@/pages/ExperienceSection";

export default function HomePage() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
      <Navigation />

      {/* <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded text-sm shadow"
        >
          {isDark ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </div> */}

      <main>
        <section id="inicio" className="scroll-mt-24">
          <HeroSection />
        </section>
        <section id="about" className="scroll-mt-24">
          <AboutMeSection />
        </section>
        <section id="stack" className="scroll-mt-24">
          <TechStackPageSection />
        </section>
        <section id="experiencia" className="scroll-mt-24">
          <ExperienceListSection />
        </section>
        <section id="proyectos" className="scroll-mt-24">
          <ProjectsSection />
        </section>
        <section id="formacion" className="scroll-mt-24">
          <CerticatesSection />
        </section>
      </main>

      <footer className="text-center py-6 border-t border-gray-200 dark:border-neutral-700 text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Usuario. All rights reserved.
      </footer>
    </div>
  );
}
