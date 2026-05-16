/**
 * @file Footer.jsx
 * @description Pie de página estático.
 */

import AnimatedLogo from "./AnimatedLogo";

export default function Footer() {
  return (
    <footer>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "8px" }}>
        <AnimatedLogo variant="full" size="sm" />
      </div>
      <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>Potenciando negocios con tecnología · <span>{new Date().getFullYear()}</span></p>
    </footer>
  );
}
