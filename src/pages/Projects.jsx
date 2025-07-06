import { useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard/ProjectCard.jsx';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return res.json();
      })
      .then(setProjects)
      .catch((err) => {
        console.error('Fetch error:', err);
        setError(err.message);
      });
  }, []);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(query.toLowerCase()) ||
    project.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          💻 Proyectos
        </h2>

        {error && (
          <p className="text-red-500 text-center mb-6">Error: {error}</p>
        )}

        <div className="mb-8 text-center">
          <input
            type="text"
            placeholder="🔍 Buscar proyectos..."
            className="w-full md:w-1/2 px-4 py-2 rounded border dark:border-neutral-700 bg-white dark:bg-neutral-800 text-gray-800 dark:text-white"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={Array.isArray(project.tech) ? project.tech.join(', ') : project.tech}
              year={project.year}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && !error && (
          <p className="text-center text-gray-500 mt-10 dark:text-gray-400">
            No se encontraron proyectos para “{query}”
          </p>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
