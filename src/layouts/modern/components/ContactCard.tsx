import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { ContactData } from "@/types/schema";

interface ContactSectionProps {
  data: ContactData;
}


export function ContactSection({ data }: ContactSectionProps) {
  const [copiedText, setCopiedText] = useState("");
  const timeoutRef = useRef<number | null>(null);

  const handleCopyToClipboard = (text: string | undefined, label: string) => {
    if (!text) {
      alert("Información no disponible.");
      return;
    }

    navigator.clipboard.writeText(text);
    setCopiedText(label);

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopiedText("");
      timeoutRef.current = null; 
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900/20 to-gray-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          ¡Trabajemos Juntos!
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea
          y cómo puedo ayudarte a hacerla realidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => handleCopyToClipboard(data.phone, "Teléfono")}
            className="bg-gradient-to-r from-blue-600 to-gray-600 hover:from-blue-700 hover:to-gray-700 text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            Copiar Teléfono
          </Button>

          <Button
            variant="outline"
            onClick={() => handleCopyToClipboard(data.email, "Email")}
            className="border-slate-400 hover:border-blue-400 text-slate-300 hover:text-blue-400 px-8 py-3 font-semibold transition-all duration-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            Copiar Email
          </Button>
        </div>

        {copiedText && (
          <p className="mt-4 text-green-400 font-medium">
            ¡{copiedText} copiado al portapapeles!
          </p>
        )}
      </div>
    </section>
  );
}
