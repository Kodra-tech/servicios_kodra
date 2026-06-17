"use client";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    contacto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState("");
  const { t, language } = useLanguage();

  const enviarWA = async (e) => {
    e.preventDefault();
    setStatus(t("contact", "status_sending"));

    const noName = language === "es" ? "Sin nombre" : "No name";
    const noContact = language === "es" ? "Sin contacto" : "No contact";
    const noMsg = language === "es" ? "Sin mensaje" : "No message";

    const nombre = formData.nombre || noName;
    const contacto = formData.contacto || noContact;
    const msg = formData.mensaje || noMsg;

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

    setStatus(t("contact", "status_redirecting"));
    const waTemplate = t("contact", "wa_text");
    const texto = waTemplate
      .replace("{nombre}", nombre)
      .replace("{contacto}", contacto)
      .replace("{mensaje}", msg);

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
            <div className="section-label">{t("contact", "label")}</div>
            <h2>{t("contact", "title")}</h2>
            <p>{t("contact", "desc")}</p>
            <div className="contacto-links">
              <a href="https://wa.me/5573253518" className="contacto-link" target="_blank" rel="noreferrer">
                <div className="link-icon">📱</div>
                <span>{t("contact", "wa_contact")}</span>
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
                <label>{t("contact", "form_name")}</label>
                <input 
                  type="text" 
                  placeholder={t("contact", "form_name_placeholder")} 
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t("contact", "form_contact")}</label>
                <input 
                  type="text" 
                  placeholder={t("contact", "form_contact_placeholder")} 
                  value={formData.contacto}
                  onChange={(e) => setFormData({...formData, contacto: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>{t("contact", "form_message")}</label>
                <textarea 
                  placeholder={t("contact", "form_message_placeholder")}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={status === t("contact", "status_sending")}>
                {status ? status : t("contact", "form_submit")}
              </button>
              <p className="form-note">{t("contact", "form_note")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

