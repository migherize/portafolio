import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function HeroSection({
  name,
  title,
  bio,
  backgroundImage,
  githubUrl,
  linkedinUrl,
  email,
  resumeUrl,
  onScrollToProjects,
}) {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setShowCopyMessage(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setShowCopyMessage(false);
    }, 3000);
  };

  return (
    <section
      className={`
        w-full min-h-[80vh] relative flex items-center justify-start px-6 md:px-16 py-12 text-white
        bg-transparent md:bg-[url('${backgroundImage}')] md:bg-cover md:bg-center md:bg-no-repeat
      `}
    >
      {/* Overlay para oscurecer */}
      <div className="hidden md:block absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 px-4">
        <h1 className="text-5xl md:text-6xl font-bold">{name}</h1>
        {title && (
          <h2 className="text-4xl md:text-4xl font-semibold text-blue-400">
            {title}
          </h2>
        )}
        <p className="text-2xl text-gray-300">{bio}</p>

        {/* Botones */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={resumeUrl}
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow hover:scale-105 transition disabled:opacity-50 border-0 inline-flex items-center justify-center"
          >
            <Download className="inline-block w-4 h-4 mr-2" />
            Descargar CV
          </a>
          <button
            onClick={onScrollToProjects}
            className="bg-transparent hover:bg-blue-700 text-white hover:text-white px-6 py-2 rounded-lg border border-white hover:border-blue-700 transition"
          >
            Ver Proyectos
          </button>
        </div>

        {/* Redes Sociales */}
        <div className="flex justify-center space-x-6 mt-4 items-center relative">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition cursor-pointer"
            >
              <Github className="w-8 h-8 " />
            </a>
          )}
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition cursor-pointer"
            >
              <Linkedin className="w-8 h-8" />
            </a>
          )}

          {email && (
            <div className="relative flex items-center">
              <button
                onClick={handleCopyEmail}
                title="Copiar correo"
                className="hover:text-blue-400 transition cursor-pointer"
              >
                <Mail className="w-8 h-8" />
              </button>
              {showCopyMessage && (
                <span className="ml-2 bg-blue-600 text-white text-xs rounded px-2 py-1 whitespace-nowrap absolute top-1/2 left-full transform -translate-y-1/2 translate-x-2 shadow-lg">
                  Correo copiado ✉️
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
