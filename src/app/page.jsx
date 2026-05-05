"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    contacto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Animaciones de entrada con IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 80);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
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
      // Guardar historial en la base de datos (Neon)
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, contacto, mensaje: msg }),
      });
    } catch (error) {
      console.error("Error al guardar en BD", error);
    }

    setStatus("Redirigiendo a WhatsApp...");
    const texto = `Hola, me contacto desde tu portafolio.\n\nNombre: ${nombre}\nContacto: ${contacto}\n\nProyecto: ${msg}`;
    // Cambia TUNUMERO por el número real
    window.open("https://wa.me/521TUNUMERO?text=" + encodeURIComponent(texto), "_blank");
    
    setTimeout(() => {
      setStatus("");
      setFormData({ nombre: "", contacto: "", mensaje: "" });
    }, 2000);
  };

  return (
    <>
      <nav>
        <div className="nav-logo">TuNombre.dev</div>
        <ul className="nav-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="#contacto" className="btn btn-primary" style={{ padding: "0.5rem 1.2rem", fontSize: "0.82rem" }}>
          Contáctame
        </a>
      </nav>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Disponible para proyectos</div>
          <h1>
            Desarrollador<br />
            <span className="line2">Web Freelance</span>
          </h1>
          <p className="hero-sub">
            Construyo páginas web y sistemas para <span>negocios locales</span> — rápidas, modernas y con base de datos incluida. Basado en <span>Monterrey, NL</span>.
          </p>
          <div className="hero-ctas">
            <a href="#proyectos" className="btn btn-primary">Ver mis proyectos</a>
            <a href="#contacto" className="btn btn-ghost">Cotiza tu proyecto</a>
          </div>
          <div className="hero-scroll">
            <div className="scroll-line"></div>
            Scroll para más
          </div>
        </div>
      </section>

      <section className="servicios" id="servicios">
        <div className="section-inner">
          <div className="section-label reveal">Lo que ofrezco</div>
          <h2 className="section-title reveal">Servicios</h2>
          <div className="servicios-grid">
            <div className="servicio-card reveal">
              <div className="servicio-num">01</div>
              <h3>Página web para tu negocio</h3>
              <p>Diseño moderno, responsive y optimizado. Ideal para taquerías, salones, consultorios y cualquier negocio local.</p>
              <div className="servicio-precio">desde $2,500 MXN</div>
            </div>

            <div className="servicio-card reveal">
              <div className="servicio-num">02</div>
              <h3>Menú digital / Catálogo QR</h3>
              <p>Tu menú o catálogo en línea con código QR. Los clientes lo ven desde el celular, tú lo actualizas cuando quieras.</p>
              <div className="servicio-precio">desde $800 MXN</div>
            </div>

            <div className="servicio-card reveal">
              <div className="servicio-num">03</div>
              <h3>Sistema de citas / reservas</h3>
              <p>Formulario de agenda online con base de datos. Tus clientes reservan citas y tú recibes notificación al instante.</p>
              <div className="servicio-precio">desde $3,500 MXN</div>
            </div>

            <div className="servicio-card reveal">
              <div className="servicio-num">04</div>
              <h3>Landing page de ventas</h3>
              <p>Página enfocada en convertir visitantes en clientes. Con formulario de contacto, WhatsApp y SEO básico.</p>
              <div className="servicio-precio">desde $1,800 MXN</div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos">
        <div className="section-inner">
          <div className="section-label reveal">Mi trabajo</div>
          <h2 className="section-title reveal">Proyectos</h2>
          <div className="proyectos-grid">
            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">HTML/CSS</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">Node.js</span>
                </div>
                <h3>Sistema de reservas — Consultorio Dental</h3>
                <p>Página con formulario de citas conectado a base de datos. El doctor recibe un correo automático por cada reserva. Desplegado en Vercel + Railway.</p>
                <a href="#" className="proyecto-link">Ver proyecto →</a>
              </div>
              <div className="proyecto-mockup">🦷</div>
            </div>

            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">HTML/CSS</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">QR</span>
                </div>
                <h3>Menú digital — Taquería El Güero</h3>
                <p>Menú con categorías, precios y fotos, accesible por código QR desde cualquier celular. El dueño actualiza los precios fácil desde un panel simple.</p>
                <a href="#" className="proyecto-link">Ver proyecto →</a>
              </div>
              <div className="proyecto-mockup">🌮</div>
            </div>

            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">HTML/CSS</span>
                  <span className="tag">SEO</span>
                  <span className="tag">WhatsApp API</span>
                </div>
                <h3>Landing page — Salón de Belleza</h3>
                <p>Página de aterrizaje con galería de fotos, servicios y botón de WhatsApp para agendar. Optimizada para aparecer en Google Maps de la zona.</p>
                <a href="#" className="proyecto-link">Ver proyecto →</a>
              </div>
              <div className="proyecto-mockup">💇</div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="section-inner">
          <div className="section-label reveal">Stack técnico</div>
          <h2 className="section-title reveal">Habilidades</h2>
          <div className="skills-grid">
            <div className="skill-pill featured reveal">HTML5</div>
            <div className="skill-pill featured reveal">CSS3</div>
            <div className="skill-pill featured reveal">JavaScript</div>
            <div className="skill-pill featured reveal">Node.js</div>
            <div className="skill-pill featured reveal">Express</div>
            <div className="skill-pill featured reveal">PostgreSQL</div>
            <div className="skill-pill reveal">Git / GitHub</div>
            <div className="skill-pill reveal">Vercel</div>
            <div className="skill-pill reveal">Railway</div>
            <div className="skill-pill reveal">REST APIs</div>
            <div className="skill-pill reveal">Responsive</div>
            <div className="skill-pill reveal">SEO básico</div>
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="section-inner">
          <div className="contacto-inner">
            <div className="contacto-text reveal">
              <div className="section-label">Hablemos</div>
              <h2>¿Tienes un proyecto en mente?</h2>
              <p>Respondo en menos de 24 horas. Puedo agendar una llamada o reunión en Monterrey sin costo para platicar tu idea.</p>
              <div className="contacto-links">
                <a href="https://wa.me/521TUNUMERO" className="contacto-link" target="_blank" rel="noreferrer">
                  <div className="link-icon">📱</div>
                  <span>WhatsApp — escríbeme directo</span>
                </a>
                <a href="mailto:tu@correo.com" className="contacto-link">
                  <div className="link-icon">✉️</div>
                  <span>tu@correo.com</span>
                </a>
                <a href="https://github.com/tuusuario" className="contacto-link" target="_blank" rel="noreferrer">
                  <div className="link-icon">⌨️</div>
                  <span>github.com/tuusuario</span>
                </a>
              </div>
            </div>

            <div className="reveal">
              <form onSubmit={enviarWA}>
                <div className="form-group">
                  <label>Tu nombre</label>
                  <input 
                    type="text" 
                    placeholder="Juan Pérez" 
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>WhatsApp o correo</label>
                  <input 
                    type="text" 
                    placeholder="+52 81 1234 5678" 
                    value={formData.contacto}
                    onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Cuéntame tu proyecto</label>
                  <textarea 
                    placeholder="Necesito una página para mi negocio de..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={status === "Enviando..."}>
                  {status ? status : "Enviar por WhatsApp →"}
                </button>
                <p className="form-note">Al dar clic se guardará tu mensaje y se abrirá WhatsApp.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Hecho con código y café ☕ — Monterrey, NL · <span id="year">{new Date().getFullYear()}</span></p>
      </footer>
    </>
  );
}
