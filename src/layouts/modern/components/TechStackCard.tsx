import {
  Code,
  Layers,
  Paintbrush,
  Server,
  Zap,
  Shield,
  Database,
  HardDrive,
  Archive,
  GitBranch,
  Package,
  Cloud,
} from "lucide-react";
import { ReactNode } from "react";

export type TechCategory = "frontend" | "backend" | "database" | "tools";
export type TechLevel = "senior" | "semi-senior" | "junior";
export type TechIconKey =
  | "code"
  | "layers"
  | "paintbrush"
  | "server"
  | "zap"
  | "shield"
  | "database"
  | "hard-drive"
  | "archive"
  | "git-branch"
  | "package"
  | "cloud";
export type TechColor = "blue" | "green" | "purple" | "orange";

export interface Tech {
  id: number | string;
  name: string;
  category: TechCategory;
  level: TechLevel;
  icon: TechIconKey;
  color: TechColor;
}

const iconMap: Record<TechIconKey, React.ComponentType<any>> = {
  code: Code,
  layers: Layers,
  paintbrush: Paintbrush,
  server: Server,
  zap: Zap,
  shield: Shield,
  database: Database,
  "hard-drive": HardDrive,
  archive: Archive,
  "git-branch": GitBranch,
  package: Package,
  cloud: Cloud,
};

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
  senior: <span style={{ fontSize: "1.8rem" }}>♔</span>,
  "semi-senior": <span style={{ fontSize: "1.6rem" }}>♞</span>,
  junior: <span style={{ fontSize: "1.4rem" }}>♙</span>,
};

const categoryTitles: Record<TechCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Base de Datos",
  tools: "Herramientas",
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
                      const IconComponent = iconMap[tech.icon];
                      const iconColor = colorMap[tech.color] || "text-white";

                      return (
                        <div
                          key={tech.id}
                          className="bg-slate-800 rounded-lg p-4 hover:bg-slate-700 transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col items-center"
                        >
                          {IconComponent && (
                            <IconComponent
                              className={`h-8 w-8 mb-2 ${iconColor}`}
                            />
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
