import { useEffect } from "react";
import useDarkMode from "@/layouts/modern/hooks/useDarkMode";
import NavigationSection from "@/layouts/modern/sections/NavigationSection";
import HeroSection from "@/layouts/modern/sections/HeroSection";
import AboutMeSection from "@/layouts/modern/sections/AboutMeSection";
import TechStackPageSection from "@/layouts/modern/sections/TechStackPage";
import ExperienceSection from "@/layouts/modern/sections/ExperienceSection";
import ProjectsSection from "@/layouts/modern/sections/ProjectsSection";
import EducationSection from "@/layouts/modern/sections/EducationSection";
import ContactSection from "@/layouts/modern/sections/ContactSection";
import FooterSection from "@/layouts/modern/sections/FooterSection";

import { UserProfile } from "@/types/schema";

interface ModernLayoutProps {
  userData: UserProfile;
}

export default function ModernLayout({ userData }: ModernLayoutProps) {
    const { isDark, toggleDarkMode } = useDarkMode();

    useEffect(() => {
      document.body.classList.add("bg-slate-900", "text-slate-300");
      document.documentElement.classList.add("bg-slate-900", "text-slate-300");
  
      return () => {
        document.body.classList.remove("bg-slate-900", "text-slate-300");
        document.documentElement.classList.remove("bg-slate-900", "text-slate-300");
      };
    }, []);

    return (
    <div className="min-h-screen h-full bg-slate-900 text-slate-300 overflow-x-hidden">

      <NavigationSection />
      <main>
        <section id="inicio" className="scroll-mt-24">
          <HeroSection 
          heroData={userData.personalInfo} 
          />
        </section>
        <section id="about" className="scroll-mt-24">
          <AboutMeSection aboutData={userData.about} />
        </section>
        <section id="stack" className="scroll-mt-24">
          <TechStackPageSection techStack={userData.skills} />
        </section>
        <section id="experiencia" className="scroll-mt-24">
          <ExperienceSection experiences={userData.experience} />
        </section>
        <section id="projects" className="scroll-mt-24">
          <ProjectsSection 
          projects={userData.projects} 
          allProjects={userData.personalInfo.socials.github}/>
        </section>
        <section id="education" className="scroll-mt-24">
          <EducationSection education={userData.education} />
        </section>
        <section id="contact" className="scroll-mt-24">
          <ContactSection 
          phone={userData.personalInfo.contact.phone}
          email={userData.personalInfo.contact.email} />
        </section>
      </main>

      <section id="footer" className="scroll-mt-24">
        <FooterSection 
          name={userData.personalInfo.fullName} 
          socials={userData.personalInfo.socials} 
          contact={userData.personalInfo.contact} 
        />
      </section>
    </div>
  );
}
