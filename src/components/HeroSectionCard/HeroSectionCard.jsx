import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutMeCard({
  name,
  bio,
  profileImage,
  githubUrl,
  linkedinUrl,
  email,
  resumeUrl,
  onScrollToProjects, // callback para "Ver Proyectos"
}) {
  const handleDownloadCV = () => {
    if (resumeUrl) {
      window.open(resumeUrl, "_blank");
    }
  };

  return (
    <div className="bg-white dark:bg-neutral-900 border border-transparent rounded-xl p-8 max-w-xl mx-auto text-center">
      {profileImage && (
        <img
          src={profileImage}
          alt={`${name} profile`}
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
        />
      )}
      <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{name}</h2>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">{bio}</p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <Button
          onClick={handleDownloadCV}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          disabled={!resumeUrl}
        >
          <Download className="w-4 h-4 mr-2" />
          Descargar CV
        </Button>

        <Button
          variant="outline"
          onClick={onScrollToProjects}
          className="border-slate-400 hover:border-blue-400 text-slate-300 hover:text-blue-400 px-8 py-3 font-semibold transition-all duration-300"
        >
          Ver Proyectos
        </Button>
      </div>

      <div className="flex justify-center space-x-6 mt-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
        )}

        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        )}

        {email && (
          <a
            href={`mailto:${email}`}
            className="text-slate-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        )}
      </div>
    </div>
  );
}
