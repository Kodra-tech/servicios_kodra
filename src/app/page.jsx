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
          aria-label="Abrir menú"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios</a></li>
          <li><a href="#proyectos" onClick={() => setIsMenuOpen(false)}>Proyectos</a></li>
          <li><a href="#contacto" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
        </ul>
      </nav>

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

      <section className="servicios" id="servicios">
        <div className="section-inner">
          <div className="section-label reveal">Lo que ofrecemos</div>
          <h2 className="section-title reveal">Nuestros Servicios</h2>
          <div className="servicios-grid">
            <div className="servicio-card reveal">
              <div className="servicio-num">01</div>
              <h3>Página web corporativa</h3>
              <p>Diseño moderno, totalmente adaptable a móviles y optimizado para Google. Ideal para posicionar tu marca en internet.</p>
              <div className="servicio-precio">desde $2,500 MXN</div>
            </div>

            <div className="servicio-card reveal">
              <div className="servicio-num">02</div>
              <h3>Menú digital y catálogos</h3>
              <p>Muestra tus productos en línea a través de códigos QR. Tus clientes lo ven desde el celular y tú puedes actualizarlo fácilmente.</p>
              <div className="servicio-precio">desde $800 MXN</div>
            </div>

            <div className="servicio-card reveal">
              <div className="servicio-num">03</div>
              <h3>Sistemas a la medida</h3>
              <p>Soluciones con bases de datos como agendas de citas, puntos de venta básicos o portales de gestión para tu negocio.</p>
              <div className="servicio-precio">desde $3,500 MXN</div>
            </div>

            <div className="servicio-card reveal">
              <div className="servicio-num">04</div>
              <h3>Landing page de ventas</h3>
              <p>Página estructurada para vender un producto específico y generar conversiones rápidas conectadas a WhatsApp o formularios.</p>
              <div className="servicio-precio">desde $1,800 MXN</div>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos">
        <div className="section-inner">
          <div className="section-label reveal">Nuestro trabajo</div>
          <h2 className="section-title reveal">Casos de Éxito</h2>
          <div className="proyectos-grid">
            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">Next.js</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Fullstack</span>
                </div>
                <h3>Sistema de reservas — Consultorio</h3>
                <p>Plataforma para agendar citas automatizadas. El sistema envía notificaciones, guarda el historial médico y permite al doctor gestionar todo desde un panel privado.</p>
                <a href="#" className="proyecto-link">Ver demostración →</a>
              </div>
              <div className="proyecto-mockup">
                <div className="mockup-header">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-line" style={{ width: "60%" }}></div>
                  <div className="mockup-line" style={{ width: "80%" }}></div>
                  <div className="mockup-box"></div>
                </div>
              </div>
            </div>

            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">React</span>
                  <span className="tag">QR</span>
                  <span className="tag">Móvil</span>
                </div>
                <h3>Menú inteligente para Restaurante</h3>
                <p>Una experiencia web súper ligera donde los comensales escanean un código QR para explorar el menú actualizado en tiempo real sin instalar aplicaciones.</p>
                <a href="#" className="proyecto-link">Ver demostración →</a>
              </div>
              <div className="proyecto-mockup">
                <div className="mockup-header">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-line" style={{ width: "40%" }}></div>
                  <div className="mockup-line" style={{ width: "90%" }}></div>
                  <div className="mockup-box"></div>
                </div>
              </div>
            </div>

            <div className="proyecto-card reveal">
              <div>
                <div className="proyecto-tags">
                  <span className="tag">HTML/CSS</span>
                  <span className="tag">SEO</span>
                  <span className="tag">Ventas</span>
                </div>
                <h3>Landing page — Salón de Belleza</h3>
                <p>Página enfocada en conversiones. Atrae tráfico local, muestra galerías interactivas y facilita la reserva de servicios a través de WhatsApp de forma directa.</p>
                <a href="#" className="proyecto-link">Ver demostración →</a>
              </div>
              <div className="proyecto-mockup">
                <div className="mockup-header">
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                  <span className="mockup-dot"></span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-line" style={{ width: "70%" }}></div>
                  <div className="mockup-line" style={{ width: "50%" }}></div>
                  <div className="mockup-box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="section-inner">
          <div className="section-label reveal">Ecosistema Tecnológico</div>
          <h2 className="section-title reveal">Tecnologías</h2>
          <div className="skills-grid">
            <div className="skill-pill featured reveal">Next.js</div>
            <div className="skill-pill featured reveal">React</div>
            <div className="skill-pill featured reveal">JavaScript</div>
            <div className="skill-pill featured reveal">Node.js</div>
            <div className="skill-pill featured reveal">PostgreSQL</div>
            <div className="skill-pill reveal">HTML5 / CSS3</div>
            <div className="skill-pill reveal">Vercel</div>
            <div className="skill-pill reveal">Git / GitHub</div>
            <div className="skill-pill reveal">APIs REST</div>
            <div className="skill-pill reveal">Diseño Adaptativo</div>
            <div className="skill-pill reveal">SEO Técnico</div>
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="section-inner">
          <div className="contacto-inner">
            <div className="contacto-text reveal">
              <div className="section-label">Hablemos</div>
              <h2>¿Tienes un proyecto en mente?</h2>
              <p>Envíanos los detalles. Nuestro equipo te responderá a la brevedad para asesorarte y ofrecerte la mejor solución tecnológica para tu negocio.</p>
              <div className="contacto-links">
                <a href="https://wa.me/5573253518" className="contacto-link" target="_blank" rel="noreferrer">
                  <div className="link-icon">📱</div>
                  <span>WhatsApp — Contacto Inmediato</span>
                </a>
                <a href="mailto:castro@ekrontech.com" className="contacto-link">
                  <div className="link-icon">✉️</div>
                  <span>castro@ekrontech.com</span>
                </a>
              </div>
            </div>

            <div className="contact-form reveal">
              <form onSubmit={enviarWA}>
                <div className="form-group">
                  <label>Tu Nombre o Empresa</label>
                  <input 
                    type="text" 
                    placeholder="Ej. Juan Pérez - Negocio X" 
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>WhatsApp o Correo de contacto</label>
                  <input 
                    type="text" 
                    placeholder="Ej. +52 55 1234 5678" 
                    value={formData.contacto}
                    onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Cuéntanos sobre tu proyecto</label>
                  <textarea 
                    placeholder="Quiero mejorar mi presencia web, requiero un sistema para..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={status === "Enviando..."}>
                  {status ? status : "Enviar a Kodra Soluciones →"}
                </button>
                <p className="form-note">Tus datos están seguros. Se guardará tu solicitud y se abrirá WhatsApp para agilizar la comunicación.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>Kodra Soluciones — Potenciando negocios con tecnología · <span>{new Date().getFullYear()}</span></p>
      </footer>
    </>
  );
}
