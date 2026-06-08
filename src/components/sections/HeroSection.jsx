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
          Software &<br />
          <span className="line2">Infraestructura</span>
        </h1>
        <p className="hero-sub">
          Desarrollamos sistemas a la medida y blindamos tu infraestructura de red con <span>soluciones de ciberseguridad</span>. Basados en <span>México</span>.
        </p>
        <div className="hero-ctas">
          <a href="#proyectos" className="btn btn-primary">Ver proyectos</a>
          <a href="#contacto" className="btn btn-ghost">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}
