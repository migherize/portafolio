
import { ReactNode } from "react";
import { FaPython, 
  FaJava, 
  FaJs, 
  FaReact, 
  FaNodeJs,
  FaDocker,
  FaVuejs,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaJenkins,
  FaChessKnight,
  FaChessKing,
  FaChessPawn,
} from "react-icons/fa";
import { SiFastapi, 
  SiDjango, 
  SiScrapy, 
  SiSpringboot, 
  SiSelenium,
  SiGraphql,
  SiApachekafka,
  SiAwslambda,
  SiApacheairflow,
  SiMongodb,
  SiAmazondynamodb,
  SiAwssecretsmanager,
  SiAwsorganizations,
  SiAwsfargate,
  SiAwselasticloadbalancing,
  SiDynatrace,
  SiAmazoncloudwatch,
  SiTypescript,
  SiPostman
} from "react-icons/si";

import { DiMysql, DiVisualstudio } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

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

const iconMap: Record<string, React.ElementType> = {
  python: FaPython,
  java: FaJava,
  javascript: FaJs,
  react: FaReact,
  django: SiDjango,
  fastapi: SiFastapi,
  scrapy: SiScrapy,
  springboot: SiSpringboot,
  graphql: SiGraphql,
  kafka: SiApachekafka,
  lambda: SiAwslambda,
  airflow: SiApacheairflow,
  mongodb: SiMongodb,
  mysql: DiMysql,
  postgresql: BiLogoPostgresql,
  dynamodb: SiAmazondynamodb,
  secretsmanager: SiAwssecretsmanager,
  ecs: SiAwsorganizations,
  fargate: SiAwsfargate,
  elasticloadbalancing: SiAwselasticloadbalancing,
  dynatrace: SiDynatrace,
  cloudwatch: SiAmazoncloudwatch,
  vue: FaVuejs,
  css: FaCss3Alt,
  typescript: SiTypescript,
  html: FaHtml5,
  visualstudiocode: DiVisualstudio,
  git: FaGitAlt,
  jenkins: FaJenkins,
  postman: SiPostman,
  docker: FaDocker,
  selenium: SiSelenium,
  aws: SiAwsorganizations,
  nodejs: FaNodeJs,
};

export interface Tech {
  id: number | string;
  name: string;
  category: TechCategory;
  level: TechLevel;
  icon: TechIconKey;
  color: TechColor;
}

const colorMap: Record<TechColor, string> = {
  blue: "text-blue-400",
  green: "text-green-400",
  purple: "text-purple-400",
  orange: "text-orange-400",
};

const levelTitles: Record<TechLevel, string> = {
  senior: "Senior",
  "semi-senior": "Semi-Senior",
  junior: "Junior",
};

const levelClasses: Record<TechLevel, string> = {
  senior: "level-senior",
  "semi-senior": "level-semi-senior",
  junior: "level-junior",
};

const levelIcons: Record<TechLevel, ReactNode> = {
  senior: <FaChessKing style={{ fontSize: "1.8rem" }} />,
  "semi-senior": <FaChessKnight style={{ fontSize: "1.6rem" }} />,
  junior: <FaChessPawn style={{ fontSize: "1.4rem" }} />,
};

const categoryTitles: Record<TechCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & DevOps",
};

const categoryColors: Record<TechCategory, string> = {
  frontend: "text-blue-400",
  backend: "text-green-400",
  database: "text-purple-400",
  tools: "text-orange-400",
};

interface LevelTitleProps {
  level: TechLevel;
}

function LevelTitle({ level }: LevelTitleProps) {
  return (
    <h4
      className={`text-lg mb-4 flex items-center justify-center gap-2 ${levelClasses[level]}`}
    >
      {levelIcons[level]} {levelTitles[level]}
    </h4>
  );
}


interface Props {
  techStack: Tech[];
}


export default function TechStackList({ techStack }: Props) {
  // Agrupar por categoría y nivel
  const groupedByCategoryAndLevel: Record<
    TechCategory,
    Partial<Record<TechLevel, Tech[]>>
  > = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = {};
    const levelGroup = acc[tech.category]!;
    if (!levelGroup[tech.level]) levelGroup[tech.level] = [];
    levelGroup[tech.level]!.push(tech);
    return acc;
  }, {} as Record<TechCategory, Partial<Record<TechLevel, Tech[]>>>);

  return (
    <>
      {Object.entries(groupedByCategoryAndLevel).map(
        ([categoryKey, levels]) => {
          const category = categoryKey as TechCategory;
          const categoryTitle = categoryTitles[category] || category;
          const categoryColor = categoryColors[category] || "";

        return (
          <div key={category} className="text-center">
            <h3 className={`text-xl font-semibold mb-6 ${categoryColor}`}>
              {categoryTitle}
            </h3>

            {Object.keys(levelTitles).map((levelKey) => {
                const level = levelKey as TechLevel;
                const techs = (levels?.[level] || []) as Tech[];
                if (techs.length === 0) return null;

              return (
                <div key={levelKey} className="mb-8">
                  <LevelTitle level={level} />
                  <div className="grid grid-cols-2 gap-4">
                    {techs.map((tech) => {
                      const IconComponent = iconMap[tech.icon.toLowerCase()];
                      const iconColor = colorMap[tech.color] || "text-white";

                      return (
                        <div
                          key={tech.id}
                          className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center"
                        >
                          {IconComponent && (
                            <IconComponent className={`h-8 w-8 mb-2 ${iconColor}`} />
                          )}
                          <div className="font-medium text-center">{tech.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
