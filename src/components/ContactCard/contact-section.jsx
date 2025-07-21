import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection({ data }) {
  const handleContactClick = () => {
    if (data?.email) {
      window.location.href = `mailto:${data.email}`;
    }
  };

  const handleEmailClick = () => {
    if (data?.email) {
      window.location.href = `mailto:${data.email}`;
    }
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
            onClick={handleContactClick}
            className="bg-gradient-to-r from-blue-600 to-gray-600 hover:from-blue-700 hover:to-gray-700 text-white px-8 py-3 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contactar
          </Button>
          <Button
            variant="outline"
            onClick={handleEmailClick}
            className="border-slate-400 hover:border-blue-400 text-slate-300 hover:text-blue-400 px-8 py-3 font-semibold transition-all duration-300"
          >
            <Mail className="w-4 h-4 mr-2" />
            Enviar Email
          </Button>
        </div>
      </div>
    </section>
  );
}
