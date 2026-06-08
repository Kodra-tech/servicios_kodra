/**
 * @file ServicesSection.jsx
 * @description Muestra el catálogo de servicios dividido en Software e Infraestructura/Redes.
 */

"use client";
import { useState } from "react";

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("software");

  return (
    <section className="servicios" id="servicios">
      <div className="section-inner">
        <div className="section-label reveal">Lo que ofrecemos</div>
        <h2 className="section-title reveal">Nuestros Servicios</h2>
        
        <div className="services-tabs reveal">
          <button 
            className={`service-tab ${activeTab === 'software' ? 'active' : ''}`}
            onClick={() => setActiveTab('software')}
          >
            Desarrollo de Software
          </button>
          <button 
            className={`service-tab ${activeTab === 'redes' ? 'active' : ''}`}
            onClick={() => setActiveTab('redes')}
          >
            Infraestructura y Ciberseguridad
          </button>
        </div>

        {activeTab === 'software' && (
          <div className="servicios-grid fade-in-tab">
            <div className="servicio-card">
              <div className="servicio-num">01</div>
              <h3>Página web corporativa</h3>
              <p>Diseño moderno, totalmente adaptable a móviles y optimizado para Google. Ideal para posicionar tu marca en internet.</p>
              <div className="servicio-precio">desde $2,500 MXN</div>
            </div>

            <div className="servicio-card">
              <div className="servicio-num">02</div>
              <h3>Menú digital y catálogos</h3>
              <p>Muestra tus productos en línea a través de códigos QR. Tus clientes lo ven desde el celular y tú puedes actualizarlo fácilmente.</p>
              <div className="servicio-precio">desde $800 MXN</div>
            </div>

            <div className="servicio-card">
              <div className="servicio-num">03</div>
              <h3>Sistemas a la medida</h3>
              <p>Soluciones con bases de datos como agendas de citas, puntos de venta básicos o portales de gestión para tu negocio.</p>
              <div className="servicio-precio">desde $3,500 MXN</div>
            </div>

            <div className="servicio-card">
              <div className="servicio-num">04</div>
              <h3>Landing page de ventas</h3>
              <p>Página estructurada para vender un producto específico y generar conversiones rápidas conectadas a WhatsApp o formularios.</p>
              <div className="servicio-precio">desde $1,800 MXN</div>
            </div>
          </div>
        )}

        {activeTab === 'redes' && (
          <div className="servicios-grid fade-in-tab">
            <div className="servicio-card network-card">
              <div className="servicio-num">01</div>
              <h3>Diseño e Ingeniería de Redes</h3>
              <p>Arquitectura de topologías personalizadas y planeación de esquemas de direccionamiento IP eficientes y escalables.</p>
            </div>

            <div className="servicio-card network-card">
              <div className="servicio-num">02</div>
              <h3>Implementación Multi-Vendor</h3>
              <p>Configuración profesional de Firewalls, Switches y Access Points empresariales para un rendimiento óptimo.</p>
            </div>

            <div className="servicio-card network-card">
              <div className="servicio-num">03</div>
              <h3>Redes Inalámbricas Enterprise</h3>
              <p>Despliegue de soluciones Wi-Fi de alta densidad con autenticación segura bajo el estándar 802.1X.</p>
            </div>

            <div className="servicio-card network-card">
              <div className="servicio-num">04</div>
              <h3>VPNs de Alta Seguridad</h3>
              <p>Implementación de túneles Site-to-Site para interconexión de sucursales y soluciones de Acceso Remoto.</p>
            </div>
            
            <div className="servicio-card network-card">
              <div className="servicio-num">05</div>
              <h3>Hardening y Ciberseguridad</h3>
              <p>Aplicación de mejores prácticas (CIS Benchmarks) para el blindaje de equipos de red y servidores.</p>
            </div>

            <div className="servicio-card network-card">
              <div className="servicio-num">06</div>
              <h3>Gestión de Identidades</h3>
              <p>Configuración de servicios de Active Directory para el control centralizado de usuarios, permisos y recursos.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
