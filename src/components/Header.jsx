import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }

    const sections = ["home", "about", "projects", "contact"];
    let current = "home";

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section;
          break;
        }
      }
    }

    if (current !== active) {
      setActive(current);
    }
  }, [active, scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      if (mobileMenuOpen) setMobileMenuOpen(false);

      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${
      scrolled
        ? "bg-gray-950/95 shadow-lg backdrop-blur-md"
        : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
    }`}>
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white">
        M&lt;&gt;nuTech
      </h1>


      {/* Navigation desktop */}
      <ul className="hidden md:flex gap-8 text-lg">
        {navLinks.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => scrollToSection(link.id)}
              className={`relative group text-gray-400 hover:text-white transition-colors duration-300 ${
                active === link.id ? "text-white font-semibold" : ""
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left ${
                  active === link.id ? "scale-x-100" : ""
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Bouton menu mobile */}
      <button 
        className="md:hidden text-white p-1"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu de navigation"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full right-0 left-0 bg-gray-900 shadow-lg p-4 flex flex-col gap-4 border-t border-gray-800 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`p-2 text-left ${
                active === link.id ? "text-white font-medium" : "text-gray-400"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
