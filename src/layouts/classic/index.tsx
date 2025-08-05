import { UserProfile } from "@/types/schema";

interface ClassicLayoutProps {
  userData: UserProfile;
}

export default function ClassicLayout({ userData }: ClassicLayoutProps) {
  return (
    <div>
      <h1>Classic Portfolio</h1>
      <h2>{userData.personalInfo.fullName}</h2>
      <h3>{userData.personalInfo.headline}</h3>
      <p>{userData.personalInfo.shortBio}</p>
      <p>Ubicación: {userData.personalInfo.location}</p>
      <p>Email: {userData.personalInfo.contact.email}</p>
      <p>Teléfono: {userData.personalInfo.contact.phone}</p>
      <p>GitHub: <a href={userData.personalInfo.socials.github} target="_blank" rel="noreferrer">{userData.personalInfo.socials.github}</a></p>
      <p>LinkedIn: <a href={userData.personalInfo.socials.linkedin} target="_blank" rel="noreferrer">{userData.personalInfo.socials.linkedin}</a></p>
    </div>
  );
}
