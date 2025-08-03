import HeroSectionCard from "@/components/HeroSectionCard/HeroSectionCard.jsx";

export default function HeroSection({ name, heroData, socials }) {
  const {
    title,
    bio,
    profileImage,
    backgroundImage,
    resumeUrl,
  } = heroData;

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-white dark:bg-neutral-900 py-12 px-6 pt-16">
      <HeroSectionCard
        name={name}
        title={title}
        bio={bio}
        profileImage={profileImage}
        backgroundImage={backgroundImage}
        githubUrl={socials.githubUrl}
        linkedinUrl={socials.linkedinUrl}
        email={socials.email}
        resumeUrl={resumeUrl}
        onScrollToProjects={scrollToProjects}
      />
    </section>
  );
}
