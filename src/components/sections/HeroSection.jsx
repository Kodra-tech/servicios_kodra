"use client";
import { useLanguage } from "../../context/LanguageContext";

/**
 * @file HeroSection.jsx
 * @description Sección de introducción (Hero Banner). Primera vista al cargar el portafolio.
 */

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-inner reveal">
        <div className="hero-badge">{t("hero", "badge")}</div>
        <h1>
          {t("hero", "title_sw")}<br />
          <span className="line2">{t("hero", "title_infra")}</span>
        </h1>
        <p className="hero-sub">
          {t("hero", "sub_start")}<span>{t("hero", "sub_span1")}</span>{t("hero", "sub_mid")}<span>{t("hero", "sub_span2")}</span>{t("hero", "sub_end")}
        </p>
        <div className="hero-ctas">
          <a href="#proyectos" className="btn btn-primary">{t("hero", "btn_projects")}</a>
          <a href="#contacto" className="btn btn-ghost">{t("hero", "btn_contact")}</a>
        </div>
      </div>
    </section>
  );
}
