import HeroSectionCard from "@/components/HeroSectionCard/HeroSectionCard.jsx";

export default function HeroSection({ heroData }) {
  const {
    fullName,
    headline,
    shortBio,
    avatarUrl,
    backgroundUrl,
    resumeUrl,
    socials,
    contact,
  } = heroData;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 py-12 px-6 pt-16">
      <HeroSectionCard
        name={fullName}
        title={headline}
        bio={shortBio}
        profileImage={avatarUrl}
        backgroundImage={backgroundUrl}
        githubUrl={socials.github}
        linkedinUrl={socials.linkedin}
        email={contact.email}
        resumeUrl={resumeUrl}
        onScrollToProjects={scrollToProjects}
      />
    </section>
  );
}
