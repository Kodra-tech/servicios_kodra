/**
 * @file ProjectsSection.jsx
 * @description Sección de Portafolio / Casos de Éxito. 
 * Maneja el estado de los 3 modales interactivos e importa sus respectivos componentes.
 */

"use client";
import { useState } from "react";
import ReservaModal from "../modals/ReservaModal";
import MenuModal from "../modals/MenuModal";
import LandingModal from "../modals/LandingModal";

export default function ProjectsSection() {
  const [isReservaModalOpen, setIsReservaModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [isLandingModalOpen, setIsLandingModalOpen] = useState(false);

  return (
    <>
      <section id="proyectos">
        <div className="section-inner">
          <div className="section-label reveal">Nuestro trabajo</div>
          <h2 className="section-title reveal">Casos de Éxito</h2>
          <div className="proyectos-grid">
            
            {/* PROYECTO 1: SISTEMA DE RESERVAS */}
            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Fullstack</span>
                </div>
                <h3>Sistema de reservas — Consultorio</h3>
                <p>Plataforma para agendar citas automatizadas. El sistema envía notificaciones, guarda el historial médico y permite al doctor gestionar todo desde un panel privado.</p>
                <button 
                  onClick={(e) => { e.preventDefault(); setIsReservaModalOpen(true); }} 
                  className="proyecto-link" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
                >
                  Ver demostración interactiva →
                </button>
              </div>
              <div className="proyecto-mockup dashboard-mockup">
                <div className="mockup-sidebar">
                   <div className="mockup-line"></div>
                   <div className="mockup-line"></div>
                   <div className="mockup-line"></div>
                </div>
                <div className="mockup-content">
                   <div className="mockup-header-bar"></div>
                   <div className="mockup-grid">
                     <div className="mockup-card"></div>
                     <div className="mockup-card"></div>
                   </div>
                </div>
              </div>
            </div>

            {/* PROYECTO 2: MENU INTELIGENTE */}
            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">React</span>
                  <span className="tag">QR</span>
                  <span className="tag">Móvil</span>
                </div>
                <h3>Menú inteligente para Restaurante</h3>
                <p>Una experiencia web súper ligera donde los comensales escanean un código QR para explorar el menú actualizado en tiempo real sin instalar aplicaciones.</p>
                <button 
                  onClick={(e) => { e.preventDefault(); setIsMenuModalOpen(true); }} 
                  className="proyecto-link" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
                >
                  Ver demostración interactiva →
                </button>
              </div>
              <div className="proyecto-mockup mobile-mockup">
                <div className="mockup-notch"></div>
                <div className="mockup-body">
                  <div className="mockup-img"></div>
                  <div className="mockup-line"></div>
                  <div className="mockup-line short"></div>
                  <div className="mockup-btn"></div>
                </div>
              </div>
            </div>

            {/* PROYECTO 3: LANDING PAGE */}
            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">HTML/CSS</span>
                  <span className="tag">SEO</span>
                  <span className="tag">Ventas</span>
                </div>
                <h3>Landing page — Salón de Belleza</h3>
                <p>Página enfocada en conversiones. Atrae tráfico local, muestra galerías interactivas y facilita la reserva de servicios a través de WhatsApp de forma directa.</p>
                <button 
                  onClick={(e) => { e.preventDefault(); setIsLandingModalOpen(true); }} 
                  className="proyecto-link" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
                >
                  Ver demostración interactiva →
                </button>
              </div>
              <div className="proyecto-mockup browser-mockup">
                <div className="mockup-header">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-hero">
                    <div className="mockup-line long"></div>
                    <div className="mockup-line medium"></div>
                    <div className="mockup-btn small"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RENDERIZADO DE MODALES (ENCAPSULADOS) */}
      <ReservaModal isOpen={isReservaModalOpen} onClose={() => setIsReservaModalOpen(false)} />
      <MenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
      <LandingModal isOpen={isLandingModalOpen} onClose={() => setIsLandingModalOpen(false)} />
    </>
  );
}
