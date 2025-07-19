import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const portfolioData = pgTable("portfolio_data", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  location: text("location"),
  profileImage: text("profile_image"),
  resumeUrl: text("resume_url"),
  githubUrl: text("github_url"),
  linkedinUrl: text("linkedin_url"),
  twitterUrl: text("twitter_url"),
  websiteUrl: text("website_url"),
  aboutMe: text("about_me").notNull(),
  stats: jsonb("stats").notNull().default('{}'),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const techStack = pgTable("tech_stack", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(), // frontend, backend, database, tools
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  proficiency: integer("proficiency").notNull().default(5), // 1-5 scale
  order: integer("order").notNull().default(0),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  location: text("location"),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"), // null means current
  description: text("description").notNull(),
  technologies: jsonb("technologies").notNull().default('[]'),
  achievements: jsonb("achievements").notNull().default('[]'),
  order: integer("order").notNull().default(0),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  imageUrl: text("image_url"),
  demoUrl: text("demo_url"),
  githubUrl: text("github_url"),
  technologies: jsonb("technologies").notNull().default('[]'),
  featured: boolean("featured").default(false),
  status: text("status").notNull().default('completed'), // completed, in-progress, archived
  order: integer("order").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  institution: text("institution").notNull(),
  location: text("location"),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"), // null means current
  degree: text("degree"),
  description: text("description"),
  grade: text("grade"),
  type: text("type").notNull().default('degree'), // degree, certification, course
  order: integer("order").notNull().default(0),
});

export const insertPortfolioDataSchema = createInsertSchema(portfolioData).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertTechStackSchema = createInsertSchema(techStack).omit({
  id: true,
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
});

export const insertEducationSchema = createInsertSchema(education).omit({
  id: true,
});

export type PortfolioData = typeof portfolioData.$inferSelect;
export type TechStack = typeof techStack.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Education = typeof education.$inferSelect;

export type InsertPortfolioData = z.infer<typeof insertPortfolioDataSchema>;
export type InsertTechStack = z.infer<typeof insertTechStackSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertEducation = z.infer<typeof insertEducationSchema>;
