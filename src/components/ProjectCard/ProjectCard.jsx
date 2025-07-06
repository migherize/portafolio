export default function ProjectCard({ title, description, tech, year, link, image }) {
  return (
    <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 my-2">{description}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{tech} · {year}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
        >
          Ver proyecto
        </a>
      )}
    </div>
  );
}
