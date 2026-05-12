/**
 * @file LandingModal.jsx
 * @description Modal interactivo para el "Landing Page".
 * Muestra el diseño visual y la estrategia de marketing enfocada en SEO local.
 */

"use client";

export default function LandingModal({ isOpen, onClose }) {
  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-left">
          <span className="modal-badge" style={{ background: "rgba(217, 70, 239, 0.1)", color: "#d946ef" }}>💅 Alto Impacto Visual</span>
          <h2 className="modal-title">Tu negocio abierto <span>24/7 en Google</span></h2>
          <p className="modal-pain">
            ¿Tienes muchos seguidores pero pocas reservas reales? ¿Tus clientes se pierden preguntando precios por inbox?
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            Tener solo Facebook no es suficiente. Una Landing Page captura a las personas que ya están buscando tus servicios en tu ciudad y los convierte en citas.
          </p>
          
          <ul className="modal-benefits">
            <li><strong>Atrae tráfico local:</strong> Aparece cuando alguien busque "salón de belleza cerca de mí".</li>
            <li><strong>Cero dudas, más acción:</strong> Muestra tus servicios, precios y testimonios para derribar objeciones.</li>
            <li><strong>Directo a WhatsApp:</strong> Un flujo diseñado para que la visita termine en tu bandeja de entrada agendando.</li>
          </ul>

          <div className="modal-cta-container">
            <a href="https://wa.me/5573253518?text=Hola,%20me%20interesa%20crear%20una%20Landing%20Page%20para%20mi%20negocio." target="_blank" rel="noreferrer" className="btn-pulse" style={{ background: "#d946ef", boxShadow: "0 0 0 0 rgba(217, 70, 239, 0.7)"}}>
              Quiero mi Landing Page
            </a>
            <p className="modal-scarcity">
              🎁 Bono de Acción Rápida: Logotipo Básico y alta en Google Mi Negocio GRATIS si iniciamos hoy.
            </p>
          </div>
        </div>

        <div className="modal-right">
          <div className="landing-browser-mockup">
            <div className="browser-top">
              <div className="browser-dot r"></div>
              <div className="browser-dot y"></div>
              <div className="browser-dot g"></div>
              <div className="browser-url">🔒 bellaspa.com/reservas</div>
            </div>
            <div className="browser-body">
              <div className="spa-hero">
                <div className="spa-title">Relajación y Belleza</div>
                <div className="spa-sub">El santuario perfecto para desconectar y renovar tu energía.</div>
                <button className="spa-btn">Agendar Cita Ahora</button>
              </div>
              
              <div className="spa-services">
                <div className="spa-section-title">Nuestros Servicios</div>
                
                <div className="spa-service-card">
                  <div className="spa-s-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80')" }}></div>
                  <div className="spa-s-info">
                    <div className="spa-s-name">Masaje Relajante</div>
                    <div className="spa-s-desc">60 min de aromaterapia y tejido profundo.</div>
                  </div>
                  <div className="spa-s-price">$850</div>
                </div>

                <div className="spa-service-card">
                  <div className="spa-s-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560944527-a4a429848866?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80')" }}></div>
                  <div className="spa-s-info">
                    <div className="spa-s-name">Facial Hidratante</div>
                    <div className="spa-s-desc">Limpieza profunda con ácido hialurónico.</div>
                  </div>
                  <div className="spa-s-price">$600</div>
                </div>

                <div className="spa-service-card">
                  <div className="spa-s-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80')" }}></div>
                  <div className="spa-s-info">
                    <div className="spa-s-name">Manicura Spa</div>
                    <div className="spa-s-desc">Exfoliación, hidratación y esmaltado semi.</div>
                  </div>
                  <div className="spa-s-price">$350</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-cta-container">
            <a href="https://wa.me/5573253518?text=Hola,%20me%20interesa%20crear%20una%20Landing%20Page%20para%20mi%20negocio." target="_blank" rel="noreferrer" className="btn-pulse" style={{ background: "#d946ef", boxShadow: "0 0 0 0 rgba(217, 70, 239, 0.7)"}}>
              Quiero mi Landing Page
            </a>
            <p className="modal-scarcity">
              🎁 Bono de Acción Rápida: Logotipo Básico y alta en Google Mi Negocio GRATIS si iniciamos hoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
