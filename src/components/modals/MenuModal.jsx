/**
 * @file MenuModal.jsx
 * @description Modal interactivo para el "Menú Inteligente".
 * Muestra el catálogo de comida y la estrategia de marketing.
 */

"use client";

export default function MenuModal({ isOpen, onClose }) {
  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-left">
          <span className="modal-badge">🍔 Cero Fricción</span>
          <h2 className="modal-title">El menú que hace que tus clientes <span>pidan más</span></h2>
          <p className="modal-pain">
            ¿Tus menús de papel se ensucian, se rompen y cada vez que cambias un precio tienes que volver a imprimir?
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
            Presentamos el Menú QR Definitivo. Cambia precios al instante, oculta platillos agotados con un clic y no vuelvas a gastar en imprenta.
          </p>
          
          <ul className="modal-benefits">
            <li><strong>Vende con los ojos:</strong> Las fotos abren el apetito. Aumenta tu ticket promedio al mostrar fotos atractivas.</li>
            <li><strong>Actualización en tiempo real:</strong> ¿Se acabó el salmón? Ocúltalo de inmediato desde tu celular.</li>
            <li><strong>Ecológico y limpio:</strong> Sin menús pegajosos pasando de mano en mano.</li>
          </ul>

          <div className="modal-cta-container">
            <a href="https://wa.me/5573253518?text=Hola,%20me%20interesa%20implementar%20el%20Menú%20Digital%20QR%20en%20mi%20restaurante." target="_blank" rel="noreferrer" className="btn-pulse">
              Digitalizar mi Menú Hoy
            </a>
            <p className="modal-scarcity">
              🎁 Oferta: Contrata esta semana y te regalamos 10 displays acrílicos de mesa con tu QR listo para escanear.
            </p>
          </div>
        </div>

        <div className="modal-right">
          <div className="catalog-mockup">
            <div className="cat-cover">
              <div className="cat-logo">🍕</div>
              <div className="cat-title">La Trattoria</div>
            </div>
            <div className="cat-tabs">
              <div className="cat-tab active">Destacados</div>
              <div className="cat-tab">Pizzas</div>
              <div className="cat-tab">Pastas</div>
              <div className="cat-tab">Bebidas</div>
            </div>
            <div className="cat-body">
              <div className="food-card">
                <div className="food-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')" }}></div>
                <div className="food-info">
                  <div>
                    <div className="food-name">Pizza Margarita Rústica</div>
                    <div className="food-desc">Salsa pomodoro, mozzarella fresca, albahaca y aceite de oliva.</div>
                  </div>
                  <div className="food-footer">
                    <div className="food-price">$185.00</div>
                    <div className="food-add">+</div>
                  </div>
                </div>
              </div>

              <div className="food-card">
                <div className="food-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')" }}></div>
                <div className="food-info">
                  <div>
                    <div className="food-name">Pasta Carbonara Originale</div>
                    <div className="food-desc">Guanciale crujiente, yema de huevo, queso pecorino y pimienta negra.</div>
                  </div>
                  <div className="food-footer">
                    <div className="food-price">$220.00</div>
                    <div className="food-add">+</div>
                  </div>
                </div>
              </div>

              <div className="food-card">
                <div className="food-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541592102409-eb1f10a4db0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')" }}></div>
                <div className="food-info">
                  <div>
                    <div className="food-name">Tiramisú Clásico</div>
                    <div className="food-desc">Capas de bizcocho bañado en café espresso, crema de mascarpone y cacao.</div>
                  </div>
                  <div className="food-footer">
                    <div className="food-price">$95.00</div>
                    <div className="food-add">+</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floating-badge">
              🛒 Ver orden (2) - $405.00
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
