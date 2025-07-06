// src/pages/About.jsx
import CertificateCard from '@/components/CertificateCard/CertificateCard.jsx';
import platziLogo from '@/assets/platzi.png';

function CertificatesSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-neutral-900 dark:to-neutral-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          🎓 Certificados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CertificateCard
                title="React desde cero"
                institution="Platzi"
                year="2024"
                logo={platziLogo}
                link="https://platzi.com/cursos/react/"
            />

            <CertificateCard
                title="Desarrollo Web"
                institution="FreeCodeCamp"
                year="2023"
                logo="https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2019/10/FreeCodeCamp_logo.png?fit=1000%2C400"
                link="https://freecodecamp.org/certificate"
            />

            <CertificateCard
                title="JavaScript Avanzado"
                institution="Udemy"
                year="2022"
                logo="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                link="https://www.udemy.com/certificate/js-avanzado"
            />

            <CertificateCard
                title="Full Stack Developer"
                institution="Codecademy"
                year="2023"
                logo="https://1000logos.net/wp-content/uploads/2022/06/Coursera-Logo.png"
                link="https://www.codecademy.com/certificates/fullstack"
            />

            <CertificateCard
                title="Python para todos"
                institution="Coursera"
                year="2021"
                logo="https://1000logos.net/wp-content/uploads/2022/06/Coursera-Logo.png"
                link="https://coursera.org/certificate/python"
            />

            <CertificateCard
                title="Diseño UX/UI"
                institution="Platzi"
                year="2024"
                logo={platziLogo}
                link="https://platzi.com/cursos/ux-ui/"
            />

            <CertificateCard
                title="Frontend Developer"
                institution="FreeCodeCamp"
                year="2022"
                logo="https://i0.wp.com/softwareengineeringdaily.com/wp-content/uploads/2019/10/FreeCodeCamp_logo.png?fit=1000%2C400"
                link="https://freecodecamp.org/certificate/frontend"
            />

            <CertificateCard
                title="Curso de Git y GitHub"
                institution="Platzi"
                year="2023"
                logo={platziLogo}
                link="https://platzi.com/cursos/git-github/"
            />
        </div>
      </div>
    </section>
  );
}

export default CertificatesSection;
