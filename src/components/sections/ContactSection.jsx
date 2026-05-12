/**
 * @file ContactSection.jsx
 * @description Sección de contacto. Incluye el formulario de contacto y la lógica
 * para enviar un mensaje directo a WhatsApp y opcionalmente guardar en la base de datos.
 */

"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    contacto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState("");

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
              <a href="mailto:kodratech@proton.me" className="contacto-link">
                <div className="link-icon">✉️</div>
                <span>kodratech@proton.me</span>
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
  );
}
