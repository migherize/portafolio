import { GraduationCap, Award, Code } from "lucide-react";

const iconMap = {
  degree: GraduationCap,
  certification: Award,
  course: Code,
};

const colorMap = {
  degree: "bg-blue-600",
  certification: "bg-green-600",
  course: "bg-purple-600",
};

const borderColorMap = {
  degree: "hover:border-blue-500/50",
  certification: "hover:border-green-500/50",
  course: "hover:border-purple-500/50",
};

const textColorMap = {
  degree: "text-blue-400",
  certification: "text-green-400",
  course: "text-purple-400",
};

export function EducationSection({ education = [] }) {
  return (
    <section id="formacion" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Formación
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Mi educación formal y certificaciones que respaldan mi experiencia técnica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu) => {
            const IconComponent = iconMap[edu.type] || GraduationCap;
            const bgColor = colorMap[edu.type] || "bg-blue-600";
            const borderColor = borderColorMap[edu.type] || "hover:border-blue-500/50";
            const textColor = textColorMap[edu.type] || "text-blue-400";

            return (
              <div
                key={edu.id}
                className={`bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 border border-slate-600/50 ${borderColor}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`${bgColor} rounded-lg p-3 flex-shrink-0`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
                      {edu.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-slate-300 mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-slate-400 text-sm mb-3">
                      {edu.startDate} - {edu.endDate || "Presente"}
                    </p>
                    {edu.description && (
                      <p className="text-slate-300 text-sm mb-3">
                        {edu.description}
                      </p>
                    )}
                    {edu.grade && (
                      <p className="text-slate-400 text-sm">
                        <span className="font-medium">Calificación:</span> {edu.grade}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
