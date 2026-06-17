"use client";
import { useState } from "react";
import ReservaModal from "../modals/ReservaModal";
import DemoModal from "../modals/DemoModal";
import LandingModal from "../modals/LandingModal";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectsSection() {
  const [isReservaModalOpen, setIsReservaModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isLandingModalOpen, setIsLandingModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section id="proyectos">
        <div className="section-inner">
          <div className="section-label reveal">{t("projects", "label")}</div>
          <h2 className="section-title reveal">{t("projects", "title")}</h2>
          <div className="proyectos-grid">
            
            {/* PROYECTO 1: SISTEMA DE RESERVAS */}
            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Fullstack</span>
                </div>
                <h3>{t("projects", "p1_title")}</h3>
                <p>{t("projects", "p1_desc")}</p>
                <button 
                  onClick={(e) => { e.preventDefault(); setIsReservaModalOpen(true); }} 
                  className="proyecto-link" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
                >
                  {t("projects", "btn_demo")}
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
                <h3>{t("projects", "p2_title")}</h3>
                <p>{t("projects", "p2_desc")}</p>
                <button 
                  onClick={(e) => { e.preventDefault(); setIsDemoModalOpen(true); }} 
                  className="proyecto-link" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
                >
                  {t("projects", "btn_demo")}
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
                <h3>{t("projects", "p3_title")}</h3>
                <p>{t("projects", "p3_desc")}</p>
                <button 
                  onClick={(e) => { e.preventDefault(); setIsLandingModalOpen(true); }} 
                  className="proyecto-link" 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit' }}
                >
                  {t("projects", "btn_demo")}
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

            {/* PROYECTO 4: RED CORPORATIVA */}
            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">CISCO</span>
                  <span className="tag">802.1X</span>
                  <span className="tag">Wi-Fi</span>
                </div>
                <h3>{t("projects", "p4_title")}</h3>
                <p>{t("projects", "p4_desc")}</p>
              </div>
              <div className="proyecto-mockup server-mockup">
                <div className="server-rack">
                  <div className="server-unit blinking-leds">
                    <span className="led green"></span>
                    <span className="led green"></span>
                    <span className="led red blink"></span>
                  </div>
                  <div className="server-unit">
                    <span className="led green"></span>
                    <span className="led green"></span>
                  </div>
                  <div className="server-unit network-switch">
                     <div className="ports">
                       <span></span><span></span><span></span><span></span>
                     </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROYECTO 5: CIBERSEGURIDAD / VPN */}
            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">Fortinet</span>
                  <span className="tag">IPsec VPN</span>
                  <span className="tag">Hardening</span>
                </div>
                <h3>{t("projects", "p5_title")}</h3>
                <p>{t("projects", "p5_desc")}</p>
              </div>
              <div className="proyecto-mockup terminal-mockup">
                <div className="terminal-header">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                </div>
                <div className="terminal-body">
                  <div className="term-line cmd">ping 10.0.5.1</div>
                  <div className="term-line res">Reply from 10.0.5.1: bytes=32 time=12ms</div>
                  <div className="term-line res">Reply from 10.0.5.1: bytes=32 time=14ms</div>
                  <div className="term-line cmd">ipsec status</div>
                  <div className="term-line res highlight">Tunnel [ACTIVE] - Secure</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* RENDERIZADO DE MODALES (ENCAPSULADOS) */}
      <ReservaModal isOpen={isReservaModalOpen} onClose={() => setIsReservaModalOpen(false)} />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <LandingModal isOpen={isLandingModalOpen} onClose={() => setIsLandingModalOpen(false)} />
    </>
  );
}
