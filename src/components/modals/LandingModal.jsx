"use client";
import { useLanguage } from "../../context/LanguageContext";

export default function LandingModal({ isOpen, onClose }) {
  const { t } = useLanguage();

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-left">
          <span className="modal-badge" style={{ background: "rgba(217, 70, 239, 0.1)", color: "#d946ef" }}>{t("landingModal", "badge")}</span>
          <h2 className="modal-title">{t("landingModal", "title")}<span>{t("landingModal", "title_accent")}</span>{t("landingModal", "title_end")}</h2>
          <p className="modal-pain">
            {t("landingModal", "pain")}
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            {t("landingModal", "explanation")}
          </p>
          
          <ul className="modal-benefits">
            <li><strong>{t("landingModal", "benefit1_title")}</strong>{t("landingModal", "benefit1_desc")}</li>
            <li><strong>{t("landingModal", "benefit2_title")}</strong>{t("landingModal", "benefit2_desc")}</li>
            <li><strong>{t("landingModal", "benefit3_title")}</strong>{t("landingModal", "benefit3_desc")}</li>
          </ul>

          <div className="modal-cta-container">
            <a href={`https://wa.me/5573253518?text=${encodeURIComponent(t("landingModal", "wa_message"))}`} target="_blank" rel="noreferrer" className="btn-pulse" style={{ background: "#d946ef", boxShadow: "0 0 0 0 rgba(217, 70, 239, 0.7)"}}>
              {t("landingModal", "btn")}
            </a>
            <p className="modal-scarcity">
              {t("landingModal", "scarcity")}
            </p>
          </div>
        </div>

        <div className="modal-right">
          <div className="landing-browser-mockup">
            <div className="browser-top">
              <div className="browser-dot r"></div>
              <div className="browser-dot y"></div>
              <div className="browser-dot g"></div>
              <div className="browser-url">{t("landingModal", "mockup_url")}</div>
            </div>
            <div className="browser-body">
              <div className="spa-hero">
                <div className="spa-title">{t("landingModal", "mockup_hero_title")}</div>
                <div className="spa-sub">{t("landingModal", "mockup_hero_sub")}</div>
                <button className="spa-btn">{t("landingModal", "mockup_hero_btn")}</button>
              </div>
              
              <div className="spa-services">
                <div className="spa-section-title">{t("landingModal", "mockup_title")}</div>
                
                <div className="spa-service-card">
                  <div className="spa-s-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80')" }}></div>
                  <div className="spa-s-info">
                    <div className="spa-s-name">{t("landingModal", "m_service1_name")}</div>
                    <div className="spa-s-desc">{t("landingModal", "m_service1_desc")}</div>
                  </div>
                  <div className="spa-s-price">$850</div>
                </div>

                <div className="spa-service-card">
                  <div className="spa-s-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560944527-a4a429848866?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80')" }}></div>
                  <div className="spa-s-info">
                    <div className="spa-s-name">{t("landingModal", "m_service2_name")}</div>
                    <div className="spa-s-desc">{t("landingModal", "m_service2_desc")}</div>
                  </div>
                  <div className="spa-s-price">$600</div>
                </div>

                <div className="spa-service-card">
                  <div className="spa-s-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80')" }}></div>
                  <div className="spa-s-info">
                    <div className="spa-s-name">{t("landingModal", "m_service3_name")}</div>
                    <div className="spa-s-desc">{t("landingModal", "m_service3_desc")}</div>
                  </div>
                  <div className="spa-s-price">$350</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-cta-container">
            <a href={`https://wa.me/5573253518?text=${encodeURIComponent(t("landingModal", "wa_message"))}`} target="_blank" rel="noreferrer" className="btn-pulse" style={{ background: "#d946ef", boxShadow: "0 0 0 0 rgba(217, 70, 239, 0.7)"}}>
              {t("landingModal", "btn")}
            </a>
            <p className="modal-scarcity">
              {t("landingModal", "scarcity")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

