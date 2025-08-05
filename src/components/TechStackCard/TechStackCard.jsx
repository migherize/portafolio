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
  
  const iconMap = {
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
  
  const colorMap = {
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400",
    orange: "text-orange-400",
  };
  
  const levelTitles = {
    senior: "Senior",
    "semi-senior": "Semi-Senior",
    junior: "Junior",
  };
  
  const levelClasses = {
    senior: "level-senior",
    "semi-senior": "level-semi-senior",
    junior: "level-junior",
  };
  
//   const levelIcons = {
//     senior: "⭐️",
//     "semi-senior": "✨",
//     junior: "⚪️",
//   };
    const levelIcons = {
        senior: <span style={{ fontSize: "1.8rem" }}>♔</span>,       // Rey
        "semi-senior": <span style={{ fontSize: "1.6rem" }}>♞</span>, // Caballo
        junior: <span style={{ fontSize: "1.4rem" }}>♙</span>,       // Peón
    };
    

  const categoryTitles = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Base de Datos",
    tools: "Herramientas",
  };
  
  const categoryColors = {
    frontend: "text-blue-400",
    backend: "text-green-400",
    database: "text-purple-400",
    tools: "text-orange-400",
  };
  
  function LevelTitle({ level }) {
    return (
      <h4 className={`text-lg mb-4 flex items-center justify-center gap-2 ${levelClasses[level]}`}>
        {levelIcons[level]} {levelTitles[level]}
      </h4>
    );
  }
  
  
  export default function TechStackList({ techStack }) {
    // Agrupar por categoría y nivel
    const groupedByCategoryAndLevel = techStack.reduce((acc, tech) => {
      if (!acc[tech.category]) acc[tech.category] = {};
      if (!acc[tech.category][tech.level]) acc[tech.category][tech.level] = [];
      acc[tech.category][tech.level].push(tech);
      return acc;
    }, {});
  
    return (
      <>
        {Object.entries(groupedByCategoryAndLevel).map(([category, levels]) => {
          const categoryTitle = categoryTitles[category] || category;
          const categoryColor = categoryColors[category] || "";
  
          return (
            <div key={category} className="text-center">
              <h3 className={`text-xl font-semibold mb-6 ${categoryColor}`}>
                {categoryTitle}
              </h3>
  
              {Object.entries(levelTitles).map(([levelKey]) => {
                const techs = levels[levelKey] || [];
                if (techs.length === 0) return null;
  
                return (
                  <div key={levelKey} className="mb-8">
                    <LevelTitle level={levelKey} />
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
  