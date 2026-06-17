"use client";
import { useLanguage } from "../../context/LanguageContext";

export default function MenuModal({ isOpen, onClose }) {
  const { t } = useLanguage();

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-left">
          <span className="modal-badge">{t("menuModal", "badge")}</span>
          <h2 className="modal-title">{t("menuModal", "title")}<span>{t("menuModal", "title_accent")}</span>{t("menuModal", "title_end")}</h2>
          <p className="modal-pain">
            {t("menuModal", "pain")}
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            {t("menuModal", "explanation")}
          </p>
          
          <ul className="modal-benefits">
            <li><strong>{t("menuModal", "benefit1_title")}</strong>{t("menuModal", "benefit1_desc")}</li>
            <li><strong>{t("menuModal", "benefit2_title")}</strong>{t("menuModal", "benefit2_desc")}</li>
            <li><strong>{t("menuModal", "benefit3_title")}</strong>{t("menuModal", "benefit3_desc")}</li>
          </ul>

          <div className="modal-cta-container">
            <a href={`https://wa.me/5573253518?text=${encodeURIComponent(t("menuModal", "wa_message"))}`} target="_blank" rel="noreferrer" className="btn-pulse">
              {t("menuModal", "btn")}
            </a>
            <p className="modal-scarcity">
              {t("menuModal", "scarcity")}
            </p>
          </div>
        </div>

        <div className="modal-right">
          <div className="catalog-mockup">
            <div className="cat-cover">
              <div className="cat-logo">🍕</div>
              <div className="cat-title">La Trattoria</div>
            </div>
            <div className="cat-tabs">
              <div className="cat-tab active">{t("menuModal", "mockup_tab1")}</div>
              <div className="cat-tab">{t("menuModal", "mockup_tab2")}</div>
              <div className="cat-tab">{t("menuModal", "mockup_tab3")}</div>
              <div className="cat-tab">{t("menuModal", "mockup_tab4")}</div>
            </div>
            <div className="cat-body">
              <div className="food-card">
                <div className="food-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')" }}></div>
                <div className="food-info">
                  <div>
                    <div className="food-name">{t("menuModal", "dish1_name")}</div>
                    <div className="food-desc">{t("menuModal", "dish1_desc")}</div>
                  </div>
                  <div className="food-footer">
                    <div className="food-price">{t("menuModal", "dish1_price")}</div>
                    <div className="food-add">+</div>
                  </div>
                </div>
              </div>

              <div className="food-card">
                <div className="food-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')" }}></div>
                <div className="food-info">
                  <div>
                    <div className="food-name">{t("menuModal", "dish2_name")}</div>
                    <div className="food-desc">{t("menuModal", "dish2_desc")}</div>
                  </div>
                  <div className="food-footer">
                    <div className="food-price">{t("menuModal", "dish2_price")}</div>
                    <div className="food-add">+</div>
                  </div>
                </div>
              </div>

              <div className="food-card">
                <div className="food-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541592102409-eb1f10a4db0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')" }}></div>
                <div className="food-info">
                  <div>
                    <div className="food-name">{t("menuModal", "dish3_name")}</div>
                    <div className="food-desc">{t("menuModal", "dish3_desc")}</div>
                  </div>
                  <div className="food-footer">
                    <div className="food-price">{t("menuModal", "dish3_price")}</div>
                    <div className="food-add">+</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-badge">
              {t("menuModal", "floating_cart")}
            </div>
          </div>
          <div className="mobile-cta-container">
            <a href={`https://wa.me/5573253518?text=${encodeURIComponent(t("menuModal", "wa_message"))}`} target="_blank" rel="noreferrer" className="btn-pulse">
              {t("menuModal", "btn")}
            </a>
            <p className="modal-scarcity">
              {t("menuModal", "scarcity")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

