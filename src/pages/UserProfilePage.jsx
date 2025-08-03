import { useParams } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";
import useFetchData from "@/hooks/useFetchData";
import { Navigation } from "@/components/Navigation/Navigation";

import HeroSection from "@/layout/modern/HeroSection";
import AboutMeSection from "@/layout/modern/AboutMeSection";
import TechStackPageSection from "@/layout/modern/TechStackPage";
import ExperienceSection from "@/layout/modern/ExperienceSection";
import ProjectsSection from "@/layout/modern/ProjectsSection";
import EducationSection from "@/layout/modern/EducationSection";
import ContactSection from "@/layout/modern/ContactSection";
import FooterSection from "@/layout/modern/FooterSection";

export default function UserProfilePage() {
    const { username } = useParams();
    const { data: userProfiles, loading, error } = useFetchData("/data/userProfiles.json");
    const { isDark, toggleDarkMode } = useDarkMode();
  
    if (!username) return <p>Ruta sin username</p>;
    if (loading) return <p>Cargando perfil...</p>;
    if (error) return <p>Error cargando perfil</p>;
  
    const userData = userProfiles?.find(
      (user) => user.username?.toLowerCase() === username.toLowerCase()
    );
  
    if (!userData) {
      return <h1>Usuario {username} no encontrado</h1>;
    }

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
          <HeroSection 
          name={userData.sharedProfile.name} 
          heroData={userData.sharedProfile.heroSection} 
          socials={userData.sharedProfile.socials} 
          />
        </section>
        <section id="about" className="scroll-mt-24">
          <AboutMeSection aboutData={userData.sharedProfile.aboutMe} />
        </section>
        <section id="stack" className="scroll-mt-24">
          <TechStackPageSection techStack={userData.techStack} />
        </section>
        <section id="experiencia" className="scroll-mt-24">
          <ExperienceSection experiences={userData.experiences} />
        </section>
        <section id="projects" className="scroll-mt-24">
          <ProjectsSection projects={userData.projects} />
        </section>
        <section id="education" className="scroll-mt-24">
          <EducationSection education={userData.education} />
        </section>
        <section id="contact" className="scroll-mt-24">
          <ContactSection 
          phoneData={userData.sharedProfile.socials.phone}
          emailData={userData.sharedProfile.socials.email} />
        </section>
      </main>

      <section id="footer" className="scroll-mt-24">
        <FooterSection 
          name={userData.sharedProfile.name} 
          socials={userData.sharedProfile.socials} 
        />
      </section>
    </div>
  );
}
