"use client";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ReservaModal({ isOpen, onClose }) {
  const [tourStep, setTourStep] = useState(1);
  const { t, language } = useLanguage();

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-left">
          <div className="tour-nav">
            <button className={`tour-tab ${tourStep === 1 ? 'active' : ''}`} onClick={() => setTourStep(1)}>{t("reservaModal", "step1_tab")}</button>
            <button className={`tour-tab ${tourStep === 2 ? 'active' : ''}`} onClick={() => setTourStep(2)}>{t("reservaModal", "step2_tab")}</button>
            <button className={`tour-tab ${tourStep === 3 ? 'active' : ''}`} onClick={() => setTourStep(3)}>{t("reservaModal", "step3_tab")}</button>
          </div>

          {tourStep === 1 && (
            <div className="fade-enter" key="step1">
              <span className="modal-badge">{t("reservaModal", "step1_badge")}</span>
              <h2 className="modal-title">{t("reservaModal", "step1_title")}<span>{t("reservaModal", "step1_title_accent")}</span>{t("reservaModal", "step1_title_end")}</h2>
              <p className="modal-pain">
                {t("reservaModal", "step1_pain")}
              </p>
              <ul className="modal-benefits">
                <li><strong>{t("reservaModal", "step1_benefit1")}</strong>{t("reservaModal", "step1_benefit1_sub")}</li>
                <li><strong>{t("reservaModal", "step1_benefit2")}</strong>{t("reservaModal", "step1_benefit2_sub")}</li>
              </ul>
            </div>
          )}

          {tourStep === 2 && (
            <div className="fade-enter" key="step2">
              <span className="modal-badge">{t("reservaModal", "step2_badge")}</span>
              <h2 className="modal-title">{t("reservaModal", "step2_title")}<span>{t("reservaModal", "step2_title_accent")}</span>{t("reservaModal", "step2_title_end")}</h2>
              <p className="modal-pain">
                {t("reservaModal", "step2_pain")}
              </p>
              <ul className="modal-benefits">
                <li><strong>{t("reservaModal", "step2_benefit1")}</strong>{t("reservaModal", "step2_benefit1_sub")}</li>
                <li><strong>{t("reservaModal", "step2_benefit2")}</strong>{t("reservaModal", "step2_benefit2_sub")}</li>
              </ul>
            </div>
          )}

          {tourStep === 3 && (
            <div className="fade-enter" key="step3">
              <span className="modal-badge">{t("reservaModal", "step3_badge")}</span>
              <h2 className="modal-title">{t("reservaModal", "step3_title")}<span>{t("reservaModal", "step3_title_accent")}</span>{t("reservaModal", "step3_title_end")}</h2>
              <p className="modal-pain">
                {t("reservaModal", "step3_pain")}
              </p>
              <ul className="modal-benefits">
                <li><strong>{t("reservaModal", "step3_benefit1")}</strong>{t("reservaModal", "step3_benefit1_sub")}</li>
                <li><strong>{t("reservaModal", "step3_benefit2")}</strong>{t("reservaModal", "step3_benefit2_sub")}</li>
              </ul>
            </div>
          )}

          <div className="modal-cta-container">
            <a href="https://wa.me/5573253518?text=Hola,%20me%20interesa%20implementar%20el%20Sistema%20de%20Reservas%20en%20mi%20consultorio." target="_blank" rel="noreferrer" className="btn-pulse">
              {t("reservaModal", "btn_implement")}
            </a>
            <p className="modal-scarcity">
              {t("reservaModal", "scarcity")}
            </p>
          </div>
        </div>

        <div className="modal-right">
          {tourStep === 1 && (
            <div className="interactive-mockup fade-enter" key="mockup1">
              <div className="im-header">
                <span className="im-title">{t("reservaModal", "panel_title")}</span>
                <span className="im-status">{t("reservaModal", "status")}</span>
              </div>
              <div className="im-body">
                <div className="im-stat-cards">
                  <div className="im-card">
                    <div className="im-card-label">{t("reservaModal", "citas_hoy")}</div>
                    <div className="im-card-value">14</div>
                  </div>
                  <div className="im-card">
                    <div className="im-card-label">{t("reservaModal", "ingresos")}</div>
                    <div className="im-card-value">{language === "es" ? "$8,500" : "$850"}</div>
                  </div>
                </div>
                
                <div className="im-appointments">
                  <div className="im-appt-title">{t("reservaModal", "proximos")}</div>
                  <div className="im-appt">
                    <div className="im-appt-info">
                      <span className="im-appt-name">{t("reservaModal", "ana")}</span>
                      <span className="im-appt-time">🕒 10:00 AM • {t("reservaModal", "confirmado")}</span>
                    </div>
                    <div className="im-appt-action">✓</div>
                  </div>
                  <div className="im-appt">
                    <div className="im-appt-info">
                      <span className="im-appt-name">{t("reservaModal", "carlos")}</span>
                      <span className="im-appt-time">🕒 10:45 AM • {t("reservaModal", "confirmado")}</span>
                    </div>
                    <div className="im-appt-action">✓</div>
                  </div>
                  <div className="im-appt">
                    <div className="im-appt-info">
                      <span className="im-appt-name">{t("reservaModal", "lucia")}</span>
                      <span className="im-appt-time">🕒 11:30 AM • {t("reservaModal", "pendiente")}</span>
                    </div>
                    <div className="im-appt-action" style={{ background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b" }}>⌛</div>
                  </div>
                </div>
              </div>
              <div className="floating-notification">
                <div className="fn-icon">🔔</div>
                <div className="fn-content">
                  <span className="fn-text">{t("reservaModal", "notif_title")}</span>
                  <span className="fn-sub">{t("reservaModal", "notif_desc")}</span>
                </div>
              </div>
            </div>
          )}

          {tourStep === 2 && (
            <div className="patient-mockup fade-enter" key="mockup2">
              <div className="pm-header">
                <div className="pm-avatar">{t("reservaModal", "bot_avatar")}</div>
                <div className="pm-name">{t("reservaModal", "bot_name")}</div>
              </div>
              <div className="pm-body">
                <div className="pm-msg out">{t("reservaModal", "msg_patient")}</div>
                <div className="pm-msg">{t("reservaModal", "msg_bot")}</div>
                <div className="pm-msg btn-list">
                  <button className="pm-action">{t("reservaModal", "opt1")}</button>
                  <button className="pm-action">{t("reservaModal", "opt2")}</button>
                  <button className="pm-action">{t("reservaModal", "opt3")}</button>
                </div>
              </div>
            </div>
          )}

          {tourStep === 3 && (
            <div className="settings-mockup fade-enter" key="mockup3">
              <div className="sm-header">{t("reservaModal", "sm_header")}</div>
              <div className="sm-body">
                <div className="sm-group">
                  <span className="sm-label">{t("reservaModal", "brand_colors")}</span>
                  <div className="sm-color-picker">
                    <div className="sm-color active" style={{ background: "#E8003A" }}></div>
                    <div className="sm-color" style={{ background: "#10b981" }}></div>
                    <div className="sm-color" style={{ background: "#8b5cf6" }}></div>
                    <div className="sm-color" style={{ background: "#f43f5e" }}></div>
                  </div>
                </div>
                <div className="sm-group" style={{ marginTop: "1rem" }}>
                  <span className="sm-label">{t("reservaModal", "rules")}</span>
                  <div className="sm-toggle-row">
                    <span>{t("reservaModal", "rule1")}</span>
                    <div className="sm-toggle"></div>
                  </div>
                  <div className="sm-toggle-row">
                    <span>{t("reservaModal", "rule2")}</span>
                    <div className="sm-toggle"></div>
                  </div>
                  <div className="sm-toggle-row">
                    <span>{t("reservaModal", "rule3")}</span>
                    <div className="sm-toggle off"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="mobile-cta-container">
            <a href="https://wa.me/5573253518?text=Hola,%20me%20interesa%20implementar%20el%20Sistema%20de%20Reservas%20en%20mi%20consultorio." target="_blank" rel="noreferrer" className="btn-pulse">
              {t("reservaModal", "btn_implement")}
            </a>
            <p className="modal-scarcity">
              {t("reservaModal", "scarcity")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
