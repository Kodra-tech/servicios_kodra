"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    contacto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Animaciones de entrada con IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 50);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const enviarWA = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const nombre = formData.nombre || "Sin nombre";
    const contacto = formData.contacto || "Sin contacto";
    const msg = formData.mensaje || "Sin mensaje";

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, contacto, mensaje: msg }),
      });
    } catch (error) {
      console.error("Error al guardar en BD", error);
    }

    setStatus("Redirigiendo a WhatsApp...");
    const texto = `Hola, me contacto desde el sitio web.\n\nNombre: ${nombre}\nContacto: ${contacto}\n\nRequerimiento: ${msg}`;
    window.open(`https://wa.me/5573253518?text=${encodeURIComponent(texto)}`, "_blank");
    
    setTimeout(() => {
      setStatus("");
      setFormData({ nombre: "", contacto: "", mensaje: "" });
    }, 2000);
  };

  return (
    <>
      <nav>
        <div className="nav-logo">Kodra Soluciones</div>
        
        <button 
          className="mobile-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{ position: isMenuOpen ? "fixed" : "relative", right: isMenuOpen ? "1.5rem" : "0" }}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#servicios" onClick={() => setIsMenuOpen(false)}>Soluciones</a></li>
          <li><a href="#proyectos" onClick={() => setIsMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-inner reveal">
          <div className="hero-badge">Disponibilidad Inmediata</div>
          <h1>
            Ingeniería & <br />
            <span className="line2">Diseño Web</span>
          </h1>
          <p className="hero-sub">
            Creamos experiencias digitales de alto impacto. <span>Kodra Soluciones</span> transforma la visión de tu empresa en plataformas robustas, escalables y visualmente impecables.
          </p>
          <div className="hero-ctas">
            <a href="#contacto" className="btn btn-primary">Iniciar Proyecto</a>
            <a href="#proyectos" className="btn btn-ghost">Explorar Portafolio</a>
          </div>
        </div>
      </section>

      <section id="servicios">
        <div className="section-inner">
          <div className="section-header reveal">
            <div>
              <div className="section-label">Qué hacemos</div>
              <h2 className="section-title">Nuestras Soluciones</h2>
            </div>
          </div>
          
          <div className="editorial-list">
            <div className="editorial-item reveal">
              <div className="editorial-num">01</div>
              <div>
                <h3>Presencia Corporativa</h3>
                <p className="editorial-desc">Diseño y desarrollo de sitios web institucionales con arquitectura SEO y máxima velocidad de carga.</p>
              </div>
              <div className="editorial-meta">Desde $2,500 MXN</div>
            </div>

            <div className="editorial-item reveal">
              <div className="editorial-num">02</div>
              <div>
                <h3>Sistemas Web Custom</h3>
                <p className="editorial-desc">Aplicaciones a la medida, paneles administrativos, puntos de venta y automatización de procesos internos.</p>
              </div>
              <div className="editorial-meta">Desde $3,500 MXN</div>
            </div>

            <div className="editorial-item reveal">
              <div className="editorial-num">03</div>
              <div>
                <h3>Menús Interactivos (QR)</h3>
                <p className="editorial-desc">Catálogos digitales auto-administrables para restaurantes y tiendas, sin requerir instalaciones extra.</p>
              </div>
              <div className="editorial-meta">Desde $800 MXN</div>
            </div>

            <div className="editorial-item reveal">
              <div className="editorial-num">04</div>
              <div>
                <h3>Landing Pages / Embudos</h3>
                <p className="editorial-desc">Páginas de aterrizaje de ultra-conversión diseñadas específicamente para campañas publicitarias.</p>
              </div>
              <div className="editorial-meta">Desde $1,800 MXN</div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos">
        <div className="section-inner">
          <div className="section-header reveal">
            <div>
              <div className="section-label">Casos de Éxito</div>
              <h2 className="section-title">Trabajos Recientes</h2>
            </div>
          </div>

          <div className="proyectos-list">
            <div className="project-item reveal">
              <div className="project-info">
                <h3>Plataforma Clínica</h3>
                <div className="tags-list">
                  <span className="tag">SaaS</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Next.js</span>
                </div>
                <p>Sistema integral para la gestión de agendas, historiales médicos y control de acceso. Reduce el ausentismo mediante recordatorios automatizados.</p>
                <a href="#" className="editorial-link">Explorar Caso →</a>
              </div>
              <div className="project-visual">🏥</div>
            </div>

            <div className="project-item reveal">
              <div className="project-info">
                <h3>Kiosco Digital Gastronómico</h3>
                <div className="tags-list">
                  <span className="tag">PWA</span>
                  <span className="tag">React</span>
                  <span className="tag">UX</span>
                </div>
                <p>Menú en tiempo real que permite gestionar inventarios, actualizar precios y capturar órdenes al instante a través de tecnología QR.</p>
                <a href="#" className="editorial-link">Explorar Caso →</a>
              </div>
              <div className="project-visual">🥂</div>
            </div>

            <div className="project-item reveal">
              <div className="project-info">
                <h3>E-Commerce de Lujo</h3>
                <div className="tags-list">
                  <span className="tag">B2C</span>
                  <span className="tag">Stripe</span>
                  <span className="tag">Performance</span>
                </div>
                <p>Tienda en línea de alta conversión con un enfoque en diseño minimalista y pasarelas de pago integradas para el sector de la moda.</p>
                <a href="#" className="editorial-link">Explorar Caso →</a>
              </div>
              <div className="project-visual">✨</div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="section-inner">
          <div className="section-header reveal">
            <div>
              <div className="section-label">Ecosistema Técnico</div>
              <h2 className="section-title">Stack Tecnológico</h2>
            </div>
          </div>
          
          <div className="skills-container reveal">
            <span className="skill-chip">React.js</span>
            <span className="skill-chip">Next.js</span>
            <span className="skill-chip">TypeScript</span>
            <span className="skill-chip">PostgreSQL</span>
            <span className="skill-chip">Node.js</span>
            <span className="skill-chip">Vercel</span>
            <span className="skill-chip">Tailwind CSS</span>
            <span className="skill-chip">Figma</span>
            <span className="skill-chip">GraphQL</span>
            <span className="skill-chip">Git</span>
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="section-inner">
          <div className="contacto-grid">
            <div className="contact-info reveal">
              <h3>Iniciemos una conversación.</h3>
              <p>Agenda una consulta gratuita para descubrir cómo nuestra tecnología puede escalar tu negocio.</p>
              <div className="contact-links">
                <a href="https://wa.me/5573253518" target="_blank" rel="noreferrer">
                  <span>Whatsapp</span> ↗
                </a>
                <a href="mailto:castro@ekrontech.com">
                  <span>castro@ekrontech.com</span> ↗
                </a>
              </div>
            </div>

            <div className="contact-form reveal">
              <form onSubmit={enviarWA}>
                <div className="form-group">
                  <label>Organización / Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Escribe tu nombre o empresa" 
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Método de contacto</label>
                  <input 
                    type="text" 
                    placeholder="Teléfono o Correo Electrónico" 
                    value={formData.contacto}
                    onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Resumen del Proyecto</label>
                  <textarea 
                    placeholder="Cuéntanos sobre los objetivos que buscas alcanzar..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }} disabled={status === "Enviando..."}>
                  {status ? status : "Enviar Solicitud"}
                </button>
                <p className="form-note">Garantizamos total confidencialidad sobre tu idea.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Kodra Soluciones © {new Date().getFullYear()} — Ingeniería Web & Diseño Estratégico.</p>
      </footer>
    </>
  );
}
