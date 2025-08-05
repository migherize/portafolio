export interface UserProfile {
  username: string;
  portfolioType: string
  personalInfo: PersonalInfo;
  about: AboutMe;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}
export interface PersonalInfo {
  fullName: string;
  headline: string;
  shortBio: string;
  location: string;
  backgroundUrl: string;
  resumeUrl: string;
  websiteUrl: string;
  contact: Contact;
  socials: Socials;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Socials {
  github: string;
  linkedin: string;
}

export interface AboutMe {
  description: string[];
  highlights: { label: string; value: string }[];
  image: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: "junior" | "semi-senior" | "senior";
  icon: string;
  color: string;
}

export interface Experience {
  id: number;
  title: string;
  type: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl: string;
  technologies: string[];
}

export type EducationType = "degree" | "certification" | "course";

export interface Education {
  id: number;
  type: EducationType;
  title: string;
  institution: string;
  startDate: string;
  endDate: string;
  description: string;
  field: string;
  certificateUrl: string;
}

export interface ContactData {
  phone: string;  
  email: string;  
}

export interface FooterData {
  name: string;
  email: string;
  githubUrl:string;
  linkedinUrl: string;
}