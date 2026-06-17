/**
 * @file Navbar.jsx
 * @description Componente de navegación principal. Incluye lógica de menú hamburguesa (responsive)
 * y enlaces de anclaje (smooth scroll) hacia las diferentes secciones del portafolio.
 */

"use client";
import { useState } from "react";
import AnimatedLogo from "./AnimatedLogo";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav>
      <div className="nav-logo"><AnimatedLogo variant="full" size="sm" /></div>
      
      <button 
        className="mobile-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={t("navbar", "aria_menu")}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><a href="#servicios" onClick={() => setIsMenuOpen(false)}>{t("navbar", "services")}</a></li>
        <li><a href="#proyectos" onClick={() => setIsMenuOpen(false)}>{t("navbar", "projects")}</a></li>
        <li><a href="#contacto" onClick={() => setIsMenuOpen(false)}>{t("navbar", "contact")}</a></li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <div className="lang-toggle" onClick={toggleLanguage}>
            <span className={language === "es" ? "active" : ""}>ES</span>
            <span className={language === "en" ? "active" : ""}>EN</span>
          </div>
        </li>
      </ul>
    </nav>
  );
}


