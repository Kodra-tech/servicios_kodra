/**
 * @file ServicesSection.jsx
 * @description Muestra el catálogo de servicios (Página web, Menú digital, Sistemas, Landing page).
 */

export default function ServicesSection() {
  return (
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
  );
}
