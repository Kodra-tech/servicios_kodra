/**
 * @file SkillsSection.jsx
 * @description Muestra las tecnologías y herramientas utilizadas en los proyectos.
 */

export default function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="section-inner">
        <div className="section-label reveal">Ecosistema Tecnológico</div>
        <h2 className="section-title reveal">Tecnologías</h2>
        <div className="skills-grid">
          <div className="skill-pill featured reveal" data-tooltip="Framework para web ultrarrápida">Next.js</div>
          <div className="skill-pill featured reveal" data-tooltip="Interfaces de usuario interactivas">React</div>
          <div className="skill-pill featured reveal" data-tooltip="Lenguaje de programación web">JavaScript</div>
          <div className="skill-pill featured reveal" data-tooltip="Ejecución de código en servidor">Node.js</div>
          <div className="skill-pill featured reveal" data-tooltip="Base de datos relacional robusta">PostgreSQL</div>
          <div className="skill-pill reveal" data-tooltip="Estructura y diseño web">HTML5 / CSS3</div>
          <div className="skill-pill reveal" data-tooltip="Plataforma de despliegue en nube">Vercel</div>
          <div className="skill-pill reveal" data-tooltip="Control de versiones de código">Git / GitHub</div>
          <div className="skill-pill reveal" data-tooltip="Comunicación entre sistemas">APIs REST</div>
          <div className="skill-pill reveal" data-tooltip="Diseño para móviles y PC">Diseño Adaptativo</div>
          <div className="skill-pill reveal" data-tooltip="Posicionamiento en Google">SEO Técnico</div>
          <div className="skill-pill featured reveal" data-tooltip="Protección contra amenazas">Ciberseguridad</div>
          <div className="skill-pill featured reveal" data-tooltip="Túneles seguros y perimetrales">VPN & Firewalls</div>
          <div className="skill-pill reveal" data-tooltip="Gestión de usuarios y permisos">Active Directory</div>
          <div className="skill-pill reveal" data-tooltip="Wi-Fi de alta seguridad">Wi-Fi 802.1X</div>
        </div>
      </div>
    </section>
  );
}
