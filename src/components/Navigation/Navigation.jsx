"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#formacion", label: "Formación" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
    );

    navItems.forEach(({ href }) => {
      const section = document.getElementById(href.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href) => {
    const section = document.getElementById(href.slice(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href.slice(1));
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold gradient-text">Portfolio</span>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => scrollToSection(href)}
                className={`transition-colors duration-300 ${
                  activeSection === href.slice(1)
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-blue-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-900 border-slate-800">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map(({ href, label }) => (
                    <button
                      key={href}
                      onClick={() => {
                        scrollToSection(href);
                        setIsOpen(false);
                      }}
                      className={`text-left transition-colors duration-300 ${
                        activeSection === href.slice(1)
                          ? "text-blue-400"
                          : "text-slate-300 hover:text-blue-400"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
