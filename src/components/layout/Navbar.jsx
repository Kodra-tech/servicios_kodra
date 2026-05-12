/**
 * @file Navbar.jsx
 * @description Componente de navegación principal. Incluye lógica de menú hamburguesa (responsive)
 * y enlaces de anclaje (smooth scroll) hacia las diferentes secciones del portafolio.
 */

"use client";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-logo">Kodra Soluciones</div>
      
      <button 
        className="mobile-toggle" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir menú"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li><a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
        <li><a href="#proyectos" onClick={() => setIsMenuOpen(false)}>Proyectos</a></li>
        <li><a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
      </ul>
    </nav>
  );
}
