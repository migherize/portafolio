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
export type TechCategory = "frontend" | "backend" | "database" | "tools";
export type TechLevel = "senior" | "semi-senior" | "junior";
export type TechIconKey =
  | "python"
  | "java"
  | "javascript"
  | "react"
  | "django"
  | "fastapi"
  | "scrapy"
  | "springboot"
  | "graphql"
  | "kafka"
  | "lambda"
  | "airflow"
  | "mongodb"
  | "mysql"
  | "postgresql"
  | "dynamodb"
  | "secretsmanager"
  | "ecs"
  | "fargate"
  | "elasticloadbalancing"
  | "dynatrace"
  | "cloudwatch"
  | "vue"
  | "css"
  | "typescript"
  | "html"
  | "visualstudiocode"
  | "git"
  | "jenkins"
  | "postman"
  | "docker"
  | "selenium"
  | "aws"
  | "nodejs"

export type TechColor = "blue" | "green" | "purple" | "orange";

export interface Skill {
  id: number;
  name: string;
  category: TechCategory;
  level: TechLevel;
  icon: TechIconKey;
  color: TechColor;
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
  link?: string;
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