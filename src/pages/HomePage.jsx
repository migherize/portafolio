import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      navigate(`/${username.trim()}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Ingresa tu username</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Ejemplo: MiguelHerize"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Ir
        </button>
      </form>
    </div>
  );
}
