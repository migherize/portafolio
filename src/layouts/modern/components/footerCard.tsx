import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/layouts/modern/components/ui/button";
import { useState, useRef } from "react";
import { FooterData } from "@/types/schema";
interface FooterSectionProps {
  data: FooterData;
}
export function Footer({ data }: FooterSectionProps) {
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleCopyEmail = () => {
    if (!data.email) return;
    navigator.clipboard.writeText(data.email);
    setShowCopyMessage(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setShowCopyMessage(false);
    }, 3000);
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900/30 to-gray-900/30 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {data.githubUrl && (
            <Button variant="ghost" asChild className="hover:text-blue-400 text-slate-300">
              <a href={data.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          )}
          {data.linkedinUrl && (
            <Button variant="ghost" asChild className="hover:text-blue-400 text-slate-300">
              <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          )}
          {data.email && (
            <Button variant="ghost" onClick={handleCopyEmail} className="hover:text-blue-400 text-slate-300">
              <Mail className="w-5 h-5" />
            </Button>
          )}
        </div>

        {showCopyMessage && (
          <p className="text-xs text-green-400 mb-2">¡Correo copiado al portapapeles!</p>
        )}

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {data.name} — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
