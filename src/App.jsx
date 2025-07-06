import About from '@/pages/About';
import { useEffect, useState } from 'react';

function App() {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = storedTheme === 'dark';

    document.documentElement.classList.toggle('dark', prefersDark);
    setIsDark(prefersDark);
  }, []);
  function toggleDarkMode() {
    const newDarkMode = !isDark;
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    setIsDark(newDarkMode);
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
    {/* Navbar */}
    <header className="shadow-sm bg-white dark:bg-neutral-800 sticky top-0 z-50">
    
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Usuario</h1>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Sobre mí</li>
          <li className="hover:text-blue-600 cursor-pointer">Proyectos</li>
          <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
        </ul>
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded text-sm ml-4"
        >
          {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
        </button>
      </nav>
    </header>

    <main>
      <div className="bg-white dark:bg-neutral-900 text-gray-900 dark:text-white">
        </div>
      <About />
    </main>

    {/* Footer */}
    <footer className="text-center py-6 border-t border-gray-200 dark:border-neutral-700 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Usuario. All rights reserved.
    </footer>
  </div>
  );
}
export default App;
