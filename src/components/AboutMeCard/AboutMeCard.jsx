export default function AboutMeCard({ aboutMe = [], stats, image }) {
  const statsArray = Array.isArray(stats)
    ? stats
    : stats
    ? [
        { label: "Proyectos", value: stats.projects || "15+" },
        { label: "Años", value: stats.experience || "3+" },
        { label: "Clientes", value: stats.clients || "50+" },
        { label: "Tecnologías", value: stats.technologies || "20+" },
      ]
    : [];

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
          {aboutMe.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">
          {statsArray.map(({ label, value }, i) => (
            <StatCard key={i} label={label} value={value} />
          ))}
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
