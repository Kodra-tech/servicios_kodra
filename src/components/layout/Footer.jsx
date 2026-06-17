"use client";

import AnimatedLogo from "./AnimatedLogo";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "8px" }}>
        <AnimatedLogo variant="full" size="sm" />
      </div>
      <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{t("footer", "text")} · <span>{new Date().getFullYear()}</span></p>
    </footer>
  );
}

