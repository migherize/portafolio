// src/pages/TechStackPage.jsx
import { useEffect, useState } from "react";
import TechStackList from "@/components/TechStackListCard/TechStackList.jsx";

export default function TechStackPage() {
  const [techStack, setTechStack] = useState([]);

  useEffect(() => {
    // Puedes reemplazar esto por fetch o import directo si tienes JSON local
    fetch("/data/tech-stack.json")
      .then((res) => res.json())
      .then(setTechStack)
      .catch((err) => console.error("Error cargando tech stack:", err));
  }, []);

  return (
    <section id="stack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Stack Tecnológico
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Las herramientas y tecnologías que domino para crear soluciones innovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <TechStackList techStack={techStack} />
        </div>
      </div>
    </section>
  );
}
