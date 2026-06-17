/**
 * @file page.jsx
 * @description Archivo Principal (Entry Point). 
 * 
 * ============================================================================
 * CYBER CODE ARCHITECTURE: COMPONENT-BASED ENCAPSULATION
 * ============================================================================
 * Este archivo ha sido refactorizado para servir únicamente como un orquestador 
 * de alto nivel. Toda la complejidad visual, el estado de los modales interactivos 
 * y la lógica de formularios ha sido "encriptada" (encapsulada) dentro de sus 
 * respectivos módulos en la carpeta `src/components/`.
 * 
 * Esta estructura garantiza:
 * 1. Mantenibilidad: Cada pieza de código tiene una única responsabilidad.
 * 2. Escalabilidad: Agregar un nuevo proyecto o sección no inflará este archivo.
 * 3. Rendimiento: React puede aislar los re-renders (ej. abrir un modal ya no 
 *    re-renderiza el HeroSection).
 * 
 * Para futuros desarrolladores o IAs:
 * - Layout: Componentes de estructura global (Navbar, Footer).
 * - Sections: Bloques principales de la landing page.
 * - Modals: Componentes de alta interacción visual y de marketing.
 */

"use client";
import { useEffect } from "react";

// --- Importaciones de Arquitectura (Secciones Encapsuladas) ---
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import ContactSection from "../components/sections/ContactSection";
import { LanguageProvider } from "../context/LanguageContext";

export default function Home() {
  /**
   * IntersectionObserver Global
   * Maneja las animaciones de entrada (.reveal) al hacer scroll.
   * Se mantiene en la raíz para observar toda la página dinámicamente.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </LanguageProvider>
  );
}

