import { ExternalLink, Github, Globe } from "lucide-react";
import { Button } from "@/layouts/modern/components/ui/button";
import { Project } from "@/types/schema";

interface Props {
  projects: Project[];
  allProjects?: string;
}

export function ProjectsSection({ projects, allProjects }: Props) {
  const getColorClass = (index: number): string => {
    const colors = ["text-blue-400", "text-purple-400", "text-green-400"];
    return colors[index % colors.length];
  };

  const getBgColorClass = (index: number): string => {
    const colors = ["bg-blue-600/20", "bg-purple-600/20", "bg-green-600/20"];
    return colors[index % colors.length];
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Una selección de mis trabajos más significativos y las soluciones que he creado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col h-full"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`Captura de pantalla de ${project.title}`}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`text-xl font-bold ${getColorClass(index)}`}>
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`hover:${getColorClass(index)} text-slate-400 transition-colors`}
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`hover:${getColorClass(index)} text-slate-400 transition-colors`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {Array.isArray(project.technologies) && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${getBgColorClass(index)} ${getColorClass(index)} px-2 py-1 rounded text-xs`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={allProjects}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Github className="h-5 w-5" />
              Ver todos los proyectos
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>

        </div>
      </div>
    </section>
  );
}
