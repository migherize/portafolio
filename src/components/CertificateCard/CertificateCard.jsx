export default function CertificateCard({ title, institution, year, link, logo }) {
    return (
      <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-md p-5 flex gap-4 items-center hover:shadow-lg transition">
        <img
          src={logo}
          alt={`${institution} logo`}
          className="w-16 h-16 object-contain"
        />
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{institution} · {year}</p>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
          >
            Ver certificado
          </a>
        )}
      </div>
    );
  }
  