import { useEffect, useState } from "react";
import AboutMeCard from "@/components/AboutMeCard/AboutMeCard.jsx";

export default function AboutSection() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((res) => res.json())
      .then(setPortfolioData)
      .catch((err) => console.error("Error cargando portfolio:", err));
  }, []);

  if (!portfolioData) {
    return (
      <section id="about" className="py-20 bg-slate-800/50 text-center text-white">
        <p>Cargando datos...</p>
      </section>
    );
  }

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Sobre Mí
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Conoce más sobre mi trayectoria, pasiones y lo que me motiva en el mundo del desarrollo.
          </p>
        </div>

        <AboutMeCard
          aboutMe={portfolioData?.aboutMe}
          stats={portfolioData?.stats}
          image={
            portfolioData?.aboutImage ||
            "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&h=600"
          }
        />
      </div>
    </section>
  );
}
