import ClassicLayout from "@/layouts/classic/index";
import ModernLayout from "@/layouts/modern/index";
import { UserProfile } from "@/types/schema";

interface LayoutFactoryProps {
  userData: UserProfile;
}

export default function LayoutFactory({ userData }: LayoutFactoryProps) {
  switch (userData.portfolioType) {
    case "classic":
      return <ClassicLayout userData={userData} />;
    case "modern":
      return <ModernLayout userData={userData} />;
    default:
      return <p>Tipo de portafolio desconocido</p>;
  }
}