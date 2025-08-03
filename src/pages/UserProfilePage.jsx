"use client";

import { useParams } from "react-router-dom";
import LayoutFactory from "@/layouts/LauyoutFactory";
import useFetchData from "@/hooks/useFetchData";

export default function UserProfilePage() {
  const { username } = useParams();
  const { data: userProfiles, loading, error } = useFetchData("/data/userProfiles.json");
  if (!username) return <p>Ruta sin username</p>;
  if (loading) return <p>Cargando perfil...</p>;
  if (error) return <p>Error cargando perfil</p>;

  const userData = userProfiles?.find(
    (user) => user.username?.toLowerCase() === username.toLowerCase()
  );

  if (!userData) {
    return <h1>Usuario {username} no encontrado</h1>;
  }
  
  return <LayoutFactory userData={userData} />;
}
