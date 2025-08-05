import { useEffect } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import NavigationSection from "@/layouts/modern/sections/NavigationSection";
import HeroSection from "@/layouts/modern/HeroSection";
import AboutMeSection from "@/layouts/modern/AboutMeSection";
import TechStackPageSection from "@/layouts/modern/TechStackPage";
import ExperienceSection from "@/layouts/modern/ExperienceSection";
import ProjectsSection from "@/layouts/modern/ProjectsSection";
import EducationSection from "@/layouts/modern/EducationSection";
import ContactSection from "@/layouts/modern/ContactSection";
import FooterSection from "@/layouts/modern/FooterSection";

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
          <ProjectsSection projects={userData.projects} />
        </section>
        <section id="education" className="scroll-mt-24">
          <EducationSection education={userData.education} />
        </section>
        <section id="contact" className="scroll-mt-24">
          <ContactSection 
          phoneData={userData.personalInfo.contact.phone}
          emailData={userData.personalInfo.contact.email} />
        </section>
      </main>

      <section id="footer" className="scroll-mt-24">
        <FooterSection 
          name={userData.personalInfo.fullName} 
          socials={userData.personalInfo.socials} 
        />
      </section>
    </div>
  );
}
