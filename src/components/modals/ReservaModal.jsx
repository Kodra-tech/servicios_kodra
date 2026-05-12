/**
 * @file ReservaModal.jsx
 * @description Modal interactivo para el "Sistema de Reservas". 
 * Utiliza un tour de 3 pasos para demostrar las capacidades del sistema.
 */

"use client";
import { useState } from "react";

export default function ReservaModal({ isOpen, onClose }) {
  const [tourStep, setTourStep] = useState(1);

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-left">
          <div className="tour-nav">
            <button className={`tour-tab ${tourStep === 1 ? 'active' : ''}`} onClick={() => setTourStep(1)}>1. Control</button>
            <button className={`tour-tab ${tourStep === 2 ? 'active' : ''}`} onClick={() => setTourStep(2)}>2. Paciente</button>
            <button className={`tour-tab ${tourStep === 3 ? 'active' : ''}`} onClick={() => setTourStep(3)}>3. Ajustes</button>
          </div>

          {tourStep === 1 && (
            <div className="fade-enter" key="step1">
              <span className="modal-badge">🔥 Panel del Doctor</span>
              <h2 className="modal-title">El motor de citas que <span>multiplica</span> tus consultas</h2>
              <p className="modal-pain">
                ¿Pierdes pacientes por no contestar WhatsApp a tiempo? ¿Tu asistente pasa horas cuadrando horarios?
              </p>
              <ul className="modal-benefits">
                <li><strong>Recupera hasta 15 horas:</strong> Adiós a las llamadas para reagendar.</li>
                <li><strong>Control total:</strong> Revisa tu agenda en tiempo real, estés donde estés.</li>
              </ul>
            </div>
          )}

          {tourStep === 2 && (
            <div className="fade-enter" key="step2">
              <span className="modal-badge">📱 Fricción Cero</span>
              <h2 className="modal-title">Tus pacientes reservan en <span>3 clics</span></h2>
              <p className="modal-pain">
                La barrera número uno para conseguir pacientes nuevos es un proceso de reserva complicado.
              </p>
              <ul className="modal-benefits">
                <li><strong>Sin descargar apps:</strong> Funciona directo desde WhatsApp, Instagram o tu web.</li>
                <li><strong>100% Automático:</strong> El sistema da informes, muestra disponibilidad y agenda sin que intervengas.</li>
              </ul>
            </div>
          )}

          {tourStep === 3 && (
            <div className="fade-enter" key="step3">
              <span className="modal-badge">⚙️ A tu medida</span>
              <h2 className="modal-title">Tu negocio, <span>tus reglas</span></h2>
              <p className="modal-pain">
                No te adaptes al software. El software debe adaptarse a la realidad de tu consultorio.
              </p>
              <ul className="modal-benefits">
                <li><strong>Tu marca:</strong> Colores, logotipos y mensajes personalizados.</li>
                <li><strong>Flexibilidad total:</strong> Configura descansos, horas de comida y duraciones por consulta.</li>
              </ul>
            </div>
          )}

          <div className="modal-cta-container">
            <a href="https://wa.me/5573253518?text=Hola,%20me%20interesa%20implementar%20el%20Sistema%20de%20Reservas%20en%20mi%20consultorio." target="_blank" rel="noreferrer" className="btn-pulse">
              Implementar en mi Consultorio Hoy
            </a>
            <p className="modal-scarcity">
              Atención personalizada: Solo implementamos 3 sistemas nuevos por mes.
            </p>
          </div>
        </div>

        <div className="modal-right">
          {tourStep === 1 && (
            <div className="interactive-mockup fade-enter" key="mockup1">
              <div className="im-header">
                <span className="im-title">Dr. Admin Panel</span>
                <span className="im-status">● En línea</span>
              </div>
              <div className="im-body">
                <div className="im-stat-cards">
                  <div className="im-card">
                    <div className="im-card-label">Citas Hoy</div>
                    <div className="im-card-value">14</div>
                  </div>
                  <div className="im-card">
                    <div className="im-card-label">Ingresos Est.</div>
                    <div className="im-card-value">$8,500</div>
                  </div>
                </div>
                
                <div className="im-appointments">
                  <div className="im-appt-title">Próximos Pacientes</div>
                  <div className="im-appt">
                    <div className="im-appt-info">
                      <span className="im-appt-name">Ana M. (Primera vez)</span>
                      <span className="im-appt-time">🕒 10:00 AM • Confirmado</span>
                    </div>
                    <div className="im-appt-action">✓</div>
                  </div>
                  <div className="im-appt">
                    <div className="im-appt-info">
                      <span className="im-appt-name">Carlos R. (Seguimiento)</span>
                      <span className="im-appt-time">🕒 10:45 AM • Confirmado</span>
                    </div>
                    <div className="im-appt-action">✓</div>
                  </div>
                  <div className="im-appt">
                    <div className="im-appt-info">
                      <span className="im-appt-name">Lucía T. (Limpieza)</span>
                      <span className="im-appt-time">🕒 11:30 AM • Pendiente</span>
                    </div>
                    <div className="im-appt-action" style={{ background: "rgba(245, 158, 11, 0.1)", color: "#f59e0b" }}>⌛</div>
                  </div>
                </div>
              </div>
              <div className="floating-notification">
                <div className="fn-icon">🔔</div>
                <div className="fn-content">
                  <span className="fn-text">¡Nueva cita agendada!</span>
                  <span className="fn-sub">Paciente: Roberto G. para Mañana 4:00 PM</span>
                </div>
              </div>
            </div>
          )}

          {tourStep === 2 && (
            <div className="patient-mockup fade-enter" key="mockup2">
              <div className="pm-header">
                <div className="pm-avatar">Bot</div>
                <div className="pm-name">Asistente Virtual</div>
              </div>
              <div className="pm-body">
                <div className="pm-msg out">Hola, necesito agendar una cita.</div>
                <div className="pm-msg">¡Hola! Claro que sí. ¿Para qué especialidad te gustaría agendar?</div>
                <div className="pm-msg btn-list">
                  <button className="pm-action">Odontología General</button>
                  <button className="pm-action">Ortodoncia</button>
                  <button className="pm-action">Limpieza Dental</button>
                </div>
              </div>
            </div>
          )}

          {tourStep === 3 && (
            <div className="settings-mockup fade-enter" key="mockup3">
              <div className="sm-header">Configuración del Consultorio</div>
              <div className="sm-body">
                <div className="sm-group">
                  <span className="sm-label">Colores de Marca</span>
                  <div className="sm-color-picker">
                    <div className="sm-color active" style={{ background: "#3b82f6" }}></div>
                    <div className="sm-color" style={{ background: "#10b981" }}></div>
                    <div className="sm-color" style={{ background: "#8b5cf6" }}></div>
                    <div className="sm-color" style={{ background: "#f43f5e" }}></div>
                  </div>
                </div>
                <div className="sm-group" style={{ marginTop: "1rem" }}>
                  <span className="sm-label">Reglas y Horarios</span>
                  <div className="sm-toggle-row">
                    <span>Aceptar pagos online</span>
                    <div className="sm-toggle"></div>
                  </div>
                  <div className="sm-toggle-row">
                    <span>Enviar recordatorio 24h</span>
                    <div className="sm-toggle"></div>
                  </div>
                  <div className="sm-toggle-row">
                    <span>Trabajar Domingos</span>
                    <div className="sm-toggle off"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="mobile-cta-container">
            <a href="https://wa.me/5573253518?text=Hola,%20me%20interesa%20implementar%20el%20Sistema%20de%20Reservas%20en%20mi%20consultorio." target="_blank" rel="noreferrer" className="btn-pulse">
              Implementar en mi Consultorio Hoy
            </a>
            <p className="modal-scarcity">
              Atención personalizada: Solo implementamos 3 sistemas nuevos por mes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
