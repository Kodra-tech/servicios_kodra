/**
 * @file HeroSection.jsx
 * @description Sección de introducción (Hero Banner). Primera vista al cargar el portafolio.
 */

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner reveal">
        <div className="hero-badge">Disponible para proyectos</div>
        <h1>
          Desarrollo Web<br />
          <span className="line2">Profesional</span>
        </h1>
        <p className="hero-sub">
          Construimos páginas web y sistemas para <span>negocios locales</span> — rápidas, modernas y con base de datos incluida. Basados en <span>México</span>.
        </p>
        <div className="hero-ctas">
          <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
          <a href="#contacto" className="btn btn-ghost">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}
