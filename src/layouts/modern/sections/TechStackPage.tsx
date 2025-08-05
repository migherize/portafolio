import TechStackList from "@/layouts/modern/components/TechStackCard";
import { Skill } from "@/types/schema";
interface Props {
  techStack: Skill[];
}

export default function TechStackPage({ techStack }: Props) {
  if (!techStack || techStack.length === 0) {
    return (
      <section id="stack" className="py-20 text-center">
        <p className="text-slate-400">Cargando stack tecnológico...</p>
      </section>
    );
  }

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
