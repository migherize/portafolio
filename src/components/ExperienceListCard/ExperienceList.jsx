export default function ExperienceList({ experiences = [] }) {

  console.log("ExperienceList recibió:", experiences);

    const getColorClass = (index) => {
      const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500"];
      return colors[index % colors.length];
    };
  
    const getTextColorClass = (index) => {
      const colors = ["text-blue-400", "text-purple-400", "text-green-400"];
      return colors[index % colors.length];
    };
  
    if (experiences.length === 0) {
      return (
        <div className="text-center text-slate-400">
          Aún no he agregado experiencias.
        </div>
      );
    }
  
    return (
      <div className="relative">
        {/* Línea del timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id || index}
              className={`relative md:col-span-1 ${
                index % 2 === 0 ? "md:justify-self-end pr-4 text-right" : "md:justify-self-start pl-4 text-left"
              }`}
            >
              {/* Punto del timeline */}
              <div
                className={`absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-slate-900 ${getColorClass(
                  index
                )} animate-pulse`}
              />
  
              <div className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors duration-300 max-w-md">
                <h3 className={`text-xl font-bold mb-2 ${getTextColorClass(index)}`}>
                  {exp.title}
                </h3>
                <h4 className="text-lg font-semibold text-slate-300 mb-2">
                  {exp.company}
                </h4>
                <p className="text-slate-400 text-sm mb-3">
                  {exp.startDate} - {exp.endDate || "Presente"}
                </p>
                <p className="text-slate-300 text-sm mb-4">{exp.description}</p>
  
                {Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-600/50 text-slate-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
  
                {Array.isArray(exp.achievements) && exp.achievements.length > 0 && (
                  <div className="text-slate-300 text-sm">
                    <div className="font-medium mb-2">Logros principales:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  