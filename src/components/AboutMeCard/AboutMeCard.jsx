// src/components/AboutMeCard/AboutMeCard.jsx

export default function AboutMeCard({ aboutMe, stats, image }) {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="animate-slide-up">
        <img
          src={image}
          alt="Foto de presentación"
          className="rounded-2xl shadow-2xl"
        />
      </div>

      <div className="animate-slide-up">
        <h3 className="text-2xl font-bold mb-6">Mi Historia</h3>
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>{aboutMe}</p>
          <p>
            Me especializo en el desarrollo full-stack, desde interfaces de usuario
            intuitivas hasta arquitecturas de backend robustas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <StatCard label="Proyectos" value={stats?.projects || "15+"} />
          <StatCard label="Años" value={stats?.experience || "3+"} />
          <StatCard label="Clientes" value={stats?.clients || "50+"} />
          <StatCard label="Tecnologías" value={stats?.technologies || "20+"} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-slate-700/50 rounded-lg p-4 text-center hover:bg-slate-700 transition-colors">
      <div className="text-3xl font-bold text-blue-400 mb-1">{value}</div>
      <div className="text-slate-400 text-sm">{label}</div>
    </div>
  );
}
