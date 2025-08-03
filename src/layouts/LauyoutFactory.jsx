import ClassicLayout from "./classic";
import ModernLayout from "./modern";

export default function LayoutFactory({ userData }) {
  switch (userData.portfolioType) {
    case "classic":
      return <ClassicLayout userData={userData} />;
    case "modern":
      return <ModernLayout userData={userData} />;
    default:
      return <p>Tipo de portafolio desconocido</p>;
  }
}