import { useEffect, useState } from 'react';
import CertificateCard from '@/components/CertificateCard/CertificateCard.jsx';

function CertificatesSection() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch('/data/certificates.json')
      .then((res) => res.json())
      .then(setCertificates)
      .catch((err) => console.error('Error cargando certificados:', err));
  }, []);
  
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          🎓 Certificados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              institution={cert.institution}
              year={cert.year}
              logo={cert.logo}
              link={cert.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
