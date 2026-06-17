"use client";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("software");
  const { t } = useLanguage();

  return (
    <section className="servicios" id="servicios">
      <div className="section-inner">
        <div className="section-label reveal">{t("services", "label")}</div>
        <h2 className="section-title reveal">{t("services", "title")}</h2>
        
        <div className="services-tabs reveal">
          <button 
            className={`service-tab ${activeTab === 'software' ? 'active' : ''}`}
            onClick={() => setActiveTab('software')}
          >
            {t("services", "tab_software")}
          </button>
          <button 
            className={`service-tab ${activeTab === 'redes' ? 'active' : ''}`}
            onClick={() => setActiveTab('redes')}
          >
            {t("services", "tab_infra")}
          </button>
        </div>

        {activeTab === 'software' && (
          <div className="servicios-grid fade-in-tab">
            <div className="servicio-card">
              <div className="servicio-num">01</div>
              <h3>{t("services", "sw1_title")}</h3>
              <p>{t("services", "sw1_desc")}</p>
              <div className="servicio-precio">{t("services", "sw1_price")}</div>
            </div>

            <div className="servicio-card">
              <div className="servicio-num">02</div>
              <h3>{t("services", "sw2_title")}</h3>
              <p>{t("services", "sw2_desc")}</p>
              <div className="servicio-precio">{t("services", "sw2_price")}</div>
            </div>

            <div className="servicio-card">
              <div className="servicio-num">03</div>
              <h3>{t("services", "sw3_title")}</h3>
              <p>{t("services", "sw3_desc")}</p>
              <div className="servicio-precio">{t("services", "sw3_price")}</div>
            </div>

            <div className="servicio-card">
              <div className="servicio-num">04</div>
              <h3>{t("services", "sw4_title")}</h3>
              <p>{t("services", "sw4_desc")}</p>
              <div className="servicio-precio">{t("services", "sw4_price")}</div>
            </div>
          </div>
        )}

        {activeTab === 'redes' && (
          <div className="servicios-grid fade-in-tab">
            <div className="servicio-card network-card">
              <div className="servicio-num">01</div>
              <h3>{t("services", "net1_title")}</h3>
              <p>{t("services", "net1_desc")}</p>
            </div>

            <div className="servicio-card network-card">
              <div className="servicio-num">02</div>
              <h3>{t("services", "net2_title")}</h3>
              <p>{t("services", "net2_desc")}</p>
            </div>

            <div className="servicio-card network-card">
              <div className="servicio-num">03</div>
              <h3>{t("services", "net3_title")}</h3>
              <p>{t("services", "net3_desc")}</p>
            </div>

            <div className="servicio-card network-card">
              <div className="servicio-num">04</div>
              <h3>{t("services", "net4_title")}</h3>
              <p>{t("services", "net4_desc")}</p>
            </div>
            
            <div className="servicio-card network-card">
              <div className="servicio-num">05</div>
              <h3>{t("services", "net5_title")}</h3>
              <p>{t("services", "net5_desc")}</p>
            </div>

            <div className="servicio-card network-card">
              <div className="servicio-num">06</div>
              <h3>{t("services", "net6_title")}</h3>
              <p>{t("services", "net6_desc")}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

