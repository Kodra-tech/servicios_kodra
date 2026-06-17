"use client";
import { useLanguage } from "../../context/LanguageContext";

export default function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section className="skills" id="skills">
      <div className="section-inner">
        <div className="section-label reveal">{t("skills", "label")}</div>
        <h2 className="section-title reveal">{t("skills", "title")}</h2>
        <div className="skills-grid">
          <div className="skill-pill featured reveal" data-tooltip={t("skills", "tooltip_next")}>Next.js</div>
          <div className="skill-pill featured reveal" data-tooltip={t("skills", "tooltip_react")}>React</div>
          <div className="skill-pill featured reveal" data-tooltip={t("skills", "tooltip_js")}>JavaScript</div>
          <div className="skill-pill featured reveal" data-tooltip={t("skills", "tooltip_node")}>Node.js</div>
          <div className="skill-pill featured reveal" data-tooltip={t("skills", "tooltip_postgres")}>PostgreSQL</div>
          <div className="skill-pill reveal" data-tooltip={t("skills", "tooltip_html_css")}>HTML5 / CSS3</div>
          <div className="skill-pill reveal" data-tooltip={t("skills", "tooltip_vercel")}>Vercel</div>
          <div className="skill-pill reveal" data-tooltip={t("skills", "tooltip_git")}>Git / GitHub</div>
          <div className="skill-pill reveal" data-tooltip={t("skills", "tooltip_api")}>APIs REST</div>
          <div className="skill-pill reveal" data-tooltip={t("skills", "tooltip_responsive")}>Diseño Adaptativo</div>
          <div className="skill-pill reveal" data-tooltip={t("skills", "tooltip_seo")}>SEO Técnico</div>
          <div className="skill-pill featured reveal" data-tooltip={t("skills", "tooltip_cybersecurity")}>Ciberseguridad</div>
          <div className="skill-pill featured reveal" data-tooltip={t("skills", "tooltip_vpn")}>VPN & Firewalls</div>
          <div className="skill-pill reveal" data-tooltip={t("skills", "tooltip_ad")}>Active Directory</div>
          <div className="skill-pill reveal" data-tooltip={t("skills", "tooltip_wifi")}>Wi-Fi 802.1X</div>
        </div>
      </div>
    </section>
  );
}

