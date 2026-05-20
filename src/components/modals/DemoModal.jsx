"use client";

import { useState } from "react";

const SCREENS = [
  { id: "menu", label: "Menú", icon: "✦" },
  { id: "mesas", label: "Mesas", icon: "⊞" },
  { id: "cocina", label: "Cocina", icon: "◉" },
  { id: "caja", label: "Caja", icon: "▣" },
  { id: "reportes", label: "Reportes", icon: "↑" },
  { id: "cliente", label: "Vista Cliente", icon: "◎" },
];

/* ─── Mockup screens ─────────────────────────────────────── */

function MenuScreen() {
  const categories = [
    {
      name: "Tacos",
      count: 3,
      items: [
        { name: "Taco de Bistec", price: "$35.00", active: true },
        { name: "Taco de Pastor", price: "$32.00", tag: "picante", active: true },
        { name: "Taco de Pollo", price: "$30.00", tag: "vegetariano", active: false },
      ],
    },
    {
      name: "Bebidas",
      count: 2,
      items: [
        { name: "Agua Fresca", price: "$25.00", active: true },
        { name: "Refresco", price: "$30.00", active: true },
      ],
    },
    {
      name: "Postres",
      count: 1,
      items: [{ name: "Churros", price: "$55.00", active: false }],
    },
  ];

  return (
    <div style={{ display: "flex", height: "100%", background: "#f9f9f9", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 11 }}>
      {/* Sidebar */}
      <div style={{ width: 90, background: "#fff", borderRight: "1px solid #eee", padding: "10px 0", display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ padding: "6px 10px", fontSize: 9, color: "#999", fontWeight: 600, letterSpacing: 1 }}>MENUKODRA</div>
        <div style={{ padding: "2px 10px", fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>Tacos Don Pepe</div>
        {["Menú", "Mesas", "Cocina", "Caja", "Reportes", "Ajustes"].map((item, i) => (
          <div key={item} style={{ padding: "5px 10px", background: i === 0 ? "#111" : "transparent", color: i === 0 ? "#fff" : "#555", borderRadius: 4, margin: "0 6px", cursor: "default", fontSize: 10 }}>
            {item}
          </div>
        ))}
      </div>
      {/* Content */}
      <div style={{ flex: 1, padding: 14, overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>Menú</span>
          <div style={{ background: "#111", color: "#fff", padding: "4px 10px", borderRadius: 5, fontSize: 10, cursor: "default" }}>+ Nueva categoría</div>
        </div>
        {categories.map((cat) => (
          <div key={cat.name} style={{ background: "#fff", border: "1px solid #eee", borderRadius: 8, marginBottom: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", borderBottom: "1px solid #f0f0f0" }}>
              <span style={{ fontWeight: 600, color: "#111" }}>{cat.name}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#aaa", fontSize: 10 }}>{cat.count} platillos</span>
                <span style={{ color: "#bbb", cursor: "default" }}>✎</span>
                <span style={{ color: "#ffaaaa", cursor: "default" }}>🗑</span>
              </div>
            </div>
            {cat.items.map((item) => (
              <div key={item.name} style={{ display: "flex", alignItems: "center", padding: "6px 10px", borderBottom: "1px solid #fafafa", gap: 8 }}>
                <div style={{ width: 24, height: 24, background: "#f0f0f5", borderRadius: 4, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: 500 }}>{item.name}</span>
                  {item.tag && (
                    <span style={{ marginLeft: 5, background: item.tag === "picante" ? "#fff0f0" : "#f0fff4", color: item.tag === "picante" ? "#e55" : "#2a8", padding: "1px 5px", borderRadius: 3, fontSize: 9 }}>
                      {item.tag}
                    </span>
                  )}
                  <div style={{ color: "#777", fontSize: 10 }}>{item.price}</div>
                </div>
                <div style={{ width: 22, height: 12, background: item.active ? "#111" : "#ddd", borderRadius: 6, cursor: "default", flexShrink: 0 }}>
                  <div style={{ width: 10, height: 10, background: "#fff", borderRadius: "50%", margin: "1px", marginLeft: item.active ? 11 : 1, transition: "margin 0.2s" }} />
                </div>
                <span style={{ color: "#bbb", cursor: "default", fontSize: 10 }}>✎</span>
                <span style={{ color: "#ffaaaa", cursor: "default", fontSize: 10 }}>🗑</span>
              </div>
            ))}
            <div style={{ padding: "5px 10px", color: "#888", fontSize: 10, cursor: "default" }}>+ Agregar platillo</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MesasScreen() {
  const tables = [
    { num: "#1", label: "Mesa 1", status: "Activa" },
    { num: "#2", label: "Mesa 2", status: "Activa" },
    { num: "#3", label: "Terraza 1", status: "Activa" },
  ];
  return (
    <div style={{ display: "flex", height: "100%", background: "#f9f9f9", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 11 }}>
      <div style={{ width: 90, background: "#fff", borderRight: "1px solid #eee", padding: "10px 0", display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ padding: "6px 10px", fontSize: 9, color: "#999", fontWeight: 600, letterSpacing: 1 }}>MENUKODRA</div>
        <div style={{ padding: "2px 10px", fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>Tacos Don Pepe</div>
        {["Menú", "Mesas", "Cocina", "Caja", "Reportes", "Ajustes"].map((item, i) => (
          <div key={item} style={{ padding: "5px 10px", background: i === 1 ? "#111" : "transparent", color: i === 1 ? "#fff" : "#555", borderRadius: 4, margin: "0 6px", cursor: "default", fontSize: 10 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>Mesas</span>
          <div style={{ background: "#111", color: "#fff", padding: "4px 10px", borderRadius: 5, fontSize: 10, cursor: "default" }}>+ Nueva mesa</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px 80px 80px", padding: "6px 12px", borderBottom: "1px solid #f0f0f0", color: "#999", fontWeight: 600, fontSize: 10 }}>
            <span>Núm.</span><span>Etiqueta</span><span>Estado</span><span>QR</span><span>Acciones</span>
          </div>
          {tables.map((t) => (
            <div key={t.num} style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px 80px 80px", padding: "7px 12px", borderBottom: "1px solid #fafafa", alignItems: "center" }}>
              <span style={{ fontWeight: 500 }}>{t.num}</span>
              <span>{t.label}</span>
              <span style={{ color: "#22c55e", background: "#f0fdf4", padding: "2px 7px", borderRadius: 10, fontSize: 9, display: "inline-block", width: "fit-content" }}>{t.status}</span>
              <span style={{ color: "#555", fontSize: 10, cursor: "default" }}>⊞ Ver QR</span>
              <div style={{ display: "flex", gap: 6 }}>
                <span style={{ color: "#888", cursor: "default" }}>✎</span>
                <span style={{ color: "#ffaaaa", cursor: "default" }}>🗑</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CocinaScreen() {
  return (
    <div style={{ height: "100%", background: "#0a0a0a", fontFamily: "system-ui, sans-serif", fontSize: 11, color: "#fff", padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>◉ Cocina</div>
          <div style={{ color: "#666", fontSize: 10 }}>Tacos Don Pepe</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10 }}>
          <div style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%" }} />
          <span style={{ color: "#22c55e" }}>En vivo</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {/* Recibidas */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <div style={{ width: 18, height: 18, background: "#f59e0b", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>1</div>
            <span style={{ fontWeight: 600 }}>Recibidas</span>
          </div>
          <div style={{ background: "#7c3a00", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 10px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontWeight: 700 }}>Mesa 1</span>
                <span style={{ color: "#aaa", fontSize: 9 }}>#2361</span>
              </div>
              <span style={{ color: "#aaa", fontSize: 9 }}>⏱ 2s</span>
            </div>
            <div style={{ padding: "8px 10px" }}>
              <div style={{ display: "flex", gap: 6 }}><span style={{ color: "#aaa" }}>1×</span><span>Churros</span></div>
              <div style={{ color: "#aaa", fontSize: 10, marginTop: 2, fontStyle: "italic" }}>&quot;con cajeta&quot;</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", margin: "0 8px 8px", borderRadius: 5, padding: "5px 0", textAlign: "center", cursor: "default", fontSize: 10 }}>
              ⊙ Aceptar
            </div>
          </div>
        </div>
        {/* En preparación */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <div style={{ width: 18, height: 18, background: "#3b82f6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>1</div>
            <span style={{ fontWeight: 600 }}>En preparación</span>
          </div>
          <div style={{ background: "#1e3a6e", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 10px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontWeight: 700 }}>Mesa 1</span>
                <span style={{ color: "#aaa", fontSize: 9 }}>#8C43</span>
              </div>
              <span style={{ color: "#aaa", fontSize: 9 }}>⏱ 24s</span>
            </div>
            <div style={{ padding: "8px 10px" }}>
              <div style={{ display: "flex", gap: 6 }}><span style={{ color: "#aaa" }}>1×</span><span>Taco de Bistec</span></div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", margin: "0 8px 8px", borderRadius: 5, padding: "5px 0", textAlign: "center", cursor: "default", fontSize: 10 }}>
              ⊙ Marcar listo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CajaScreen() {
  return (
    <div style={{ display: "flex", height: "100%", background: "#f9f9f9", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 11 }}>
      <div style={{ width: 90, background: "#fff", borderRight: "1px solid #eee", padding: "10px 0", display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ padding: "6px 10px", fontSize: 9, color: "#999", fontWeight: 600, letterSpacing: 1 }}>MENUKODRA</div>
        <div style={{ padding: "2px 10px", fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>Tacos Don Pepe</div>
        {["Menú", "Mesas", "Cocina", "Caja", "Reportes", "Ajustes"].map((item, i) => (
          <div key={item} style={{ padding: "5px 10px", background: i === 3 ? "#111" : "transparent", color: i === 3 ? "#fff" : "#555", borderRadius: 4, margin: "0 6px", cursor: "default", fontSize: 10 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 14 }}>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>Caja</div>
          <div style={{ color: "#999", fontSize: 10 }}>Mesas activas y cobros pendientes</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: 12, width: 160 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <span style={{ fontWeight: 600 }}>Mesa 1</span>
            <span style={{ color: "#22c55e", fontSize: 9, background: "#f0fdf4", padding: "1px 6px", borderRadius: 10 }}>Activa</span>
          </div>
          <div style={{ color: "#999", fontSize: 9, marginBottom: 6 }}>⏱ 5h 0m</div>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#111", marginBottom: 8 }}>$125.00</div>
          <div style={{ border: "1px solid #eee", borderRadius: 6, padding: "5px 0", textAlign: "center", fontSize: 10, color: "#555", cursor: "default" }}>
            ▣ Ver cuenta
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportesScreen() {
  const rows = [
    { date: "21/04/2026", sessions: 6, sales: "$2,779", tip: "$51.8", total: "$2,830.8", bar: 28 },
    { date: "25/04/2026", sessions: 21, sales: "$9,799", tip: "$306.55", total: "$10,105.55", bar: 100 },
    { date: "02/05/2026", sessions: 25, sales: "$13,175", tip: "$682.95", total: "$13,857.95", bar: 100 },
    { date: "09/05/2026", sessions: 29, sales: "$14,992", tip: "$783.4", total: "$15,775.4", bar: 100 },
    { date: "10/05/2026", sessions: 18, sales: "$9,978", tip: "$569.65", total: "$10,547.65", bar: 95 },
    { date: "15/05/2026", sessions: 8, sales: "$3,204", tip: "$196.2", total: "$3,400.2", bar: 34 },
  ];
  return (
    <div style={{ display: "flex", height: "100%", background: "#f9f9f9", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 11, overflow: "hidden" }}>
      <div style={{ width: 90, background: "#fff", borderRight: "1px solid #eee", padding: "10px 0", display: "flex", flexDirection: "column", gap: 2, flexShrink: 0 }}>
        <div style={{ padding: "6px 10px", fontSize: 9, color: "#999", fontWeight: 600, letterSpacing: 1 }}>MENUKODRA</div>
        <div style={{ padding: "2px 10px", fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>Tacos Don Pepe</div>
        {["Menú", "Mesas", "Cocina", "Caja", "Reportes", "Ajustes"].map((item, i) => (
          <div key={item} style={{ padding: "5px 10px", background: i === 4 ? "#111" : "transparent", color: i === 4 ? "#fff" : "#555", borderRadius: 4, margin: "0 6px", cursor: "default", fontSize: 10 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 14, overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>Reportes</div>
            <div style={{ color: "#999", fontSize: 10 }}>Ventas, platillos y ticket promedio</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ border: "1px solid #ddd", borderRadius: 5, padding: "3px 8px", fontSize: 10, cursor: "default", color: "#555" }}>↓ CSV</div>
            <div style={{ border: "1px solid #ddd", borderRadius: 5, padding: "3px 8px", fontSize: 10, cursor: "default", color: "#555" }}>↓ PDF</div>
          </div>
        </div>
        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 12 }}>
          {[
            { label: "Ventas totales", value: "$223,675", color: "#22c55e" },
            { label: "Propina total", value: "$12,486.1", color: "#3b82f6" },
            { label: "Ticket promedio", value: "$510.67", color: "#f59e0b" },
            { label: "Sesiones cerradas", value: "438", color: "#a855f7" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid #eee", borderRadius: 8, padding: "8px 10px" }}>
              <div style={{ color: "#888", fontSize: 9, marginBottom: 3 }}>{s.label}</div>
              <div style={{ fontWeight: 700, fontSize: 13, color: "#111" }}>{s.value}</div>
            </div>
          ))}
        </div>
        {/* Table */}
        <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "90px 50px 70px 70px 80px 60px", padding: "5px 10px", borderBottom: "1px solid #f0f0f0", color: "#999", fontWeight: 600, fontSize: 9 }}>
            <span>Fecha</span><span>Ses.</span><span>Ventas</span><span>Propina</span><span>Total</span><span>Graf.</span>
          </div>
          {rows.map((r) => (
            <div key={r.date} style={{ display: "grid", gridTemplateColumns: "90px 50px 70px 70px 80px 60px", padding: "5px 10px", borderBottom: "1px solid #fafafa", alignItems: "center" }}>
              <span>{r.date}</span>
              <span style={{ textAlign: "center" }}>{r.sessions}</span>
              <span>{r.sales}</span>
              <span>{r.tip}</span>
              <span style={{ fontWeight: 600 }}>{r.total}</span>
              <div style={{ height: 6, background: "#eee", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${r.bar}%`, background: "#22c55e", borderRadius: 3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClienteScreen() {
  const [activeTab, setActiveTab] = useState("Tacos");
  const tabs = ["Tacos", "Bebidas", "Postres"];
  const items = {
    Tacos: [
      { name: "Taco de Bistec", desc: "Bistec asado con cebolla y cilantro", price: "$35", time: "10 min" },
      { name: "Taco de Pastor", desc: "Carne al pastor con piña y cebolla", price: "$32", time: "10 min", tag: "Picante" },
      { name: "Taco de Pollo", desc: "Pollo a la plancha con guacamole", price: "$30", time: "8 min", tag: "Vegetariano" },
    ],
    Bebidas: [
      { name: "Agua Fresca", desc: "De temporada, natural", price: "$25", time: "2 min" },
      { name: "Refresco", desc: "Lata fría", price: "$30", time: "1 min" },
    ],
    Postres: [
      { name: "Churros", desc: "Con cajeta y crema", price: "$55", time: "8 min" },
    ],
  };

  return (
    <div style={{ height: "100%", background: "#fff", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 12, overflowY: "auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, background: "#f0f0f0", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🍽</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 12 }}>Tacos Don Pepe</div>
            <div style={{ color: "#999", fontSize: 10 }}>Mesa 1</div>
          </div>
        </div>
        <span style={{ fontSize: 14 }}>🌙</span>
      </div>

      {/* Order status */}
      <div style={{ margin: "10px 14px", border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", borderBottom: "1px solid #f5f5f5" }}>
          <span style={{ fontWeight: 600, fontSize: 11 }}>Mis pedidos</span>
          <span style={{ background: "#fff7ed", color: "#c2692a", padding: "2px 7px", borderRadius: 10, fontSize: 9 }}>● En proceso</span>
        </div>
        <div style={{ padding: "7px 10px", background: "#f0fdf4", borderBottom: "1px solid #f5f5f5" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#16a34a", fontWeight: 600, fontSize: 10 }}>✓ ¡Listo para recoger!</span>
            <span style={{ color: "#999", fontSize: 9 }}>11:42 a.m.</span>
          </div>
          <div style={{ color: "#555", fontSize: 10, marginTop: 2 }}>• 1× Taco de Bistec</div>
        </div>
        <div style={{ padding: "7px 10px", background: "#fffbeb", borderBottom: "1px solid #f5f5f5" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#d97706", fontWeight: 600, fontSize: 10 }}>🔥 Preparando…</span>
            <span style={{ color: "#999", fontSize: 9 }}>04:39 p.m.</span>
          </div>
          <div style={{ color: "#555", fontSize: 10, marginTop: 2 }}>• 1× Taco de Bistec</div>
        </div>
        <div style={{ padding: "7px 10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#888", fontSize: 10 }}>⏱ Recibido</span>
            <span style={{ color: "#999", fontSize: 9 }}>04:39 p.m.</span>
          </div>
          <div style={{ color: "#555", fontSize: 10, marginTop: 2 }}>• 1× Churros</div>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{ display: "flex", gap: 6, padding: "0 14px", marginBottom: 6 }}>
        {tabs.map((t) => (
          <div key={t} onClick={() => setActiveTab(t)} style={{ padding: "4px 12px", borderRadius: 20, background: activeTab === t ? "#111" : "#f5f5f5", color: activeTab === t ? "#fff" : "#555", fontSize: 10, cursor: "pointer", fontWeight: activeTab === t ? 600 : 400 }}>
            {t}
          </div>
        ))}
      </div>

      {/* Items */}
      <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: 8 }}>
        {(items[activeTab] || []).map((item) => (
          <div key={item.name} style={{ border: "1px solid #eee", borderRadius: 10, padding: 10, display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 11 }}>{item.name}</div>
              <div style={{ color: "#888", fontSize: 10, margin: "2px 0" }}>{item.desc}</div>
              {item.tag && (
                <span style={{ background: item.tag === "Picante" ? "#fff0f0" : "#f0fff4", color: item.tag === "Picante" ? "#e55" : "#2a8", padding: "1px 6px", borderRadius: 3, fontSize: 9 }}>
                  {item.tag}
                </span>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <span style={{ fontWeight: 700, fontSize: 12 }}>{item.price}</span>
                <span style={{ color: "#bbb", fontSize: 10 }}>{item.time}</span>
              </div>
            </div>
            <div style={{ width: 40, height: 40, background: "#f5f5f5", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", cursor: "default" }}>
              <span style={{ fontSize: 14 }}>🍽</span>
              <div style={{ position: "absolute", bottom: -4, right: -4, width: 14, height: 14, background: "#111", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>+</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer actions */}
      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
        <div style={{ border: "1px solid #eee", borderRadius: 8, padding: "9px 0", textAlign: "center", fontWeight: 600, fontSize: 12, cursor: "default" }}>
          Solicitar la cuenta
        </div>
        <div style={{ textAlign: "center", color: "#888", fontSize: 11, cursor: "default" }}>
          🔔 Llamar al mesero
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────── */

export default function DemoModal({ isOpen, onClose }) {
  const [activeScreen, setActiveScreen] = useState("menu");

  const renderScreen = () => {
    switch (activeScreen) {
      case "menu": return <MenuScreen />;
      case "mesas": return <MesasScreen />;
      case "cocina": return <CocinaScreen />;
      case "caja": return <CajaScreen />;
      case "reportes": return <ReportesScreen />;
      case "cliente": return <ClienteScreen />;
      default: return <MenuScreen />;
    }
  };

  const isClienteView = activeScreen === "cliente";

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : ""}`}
      onClick={onClose}
      style={{ zIndex: 9999 }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: 960, width: "95vw", maxHeight: "90vh", overflow: "hidden", display: "flex", flexDirection: "column" }}
      >
        <button className="modal-close" onClick={onClose} style={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}>✕</button>

        {/* Header */}
        <div style={{ padding: "22px 28px 0", flexShrink: 0 }}>
          <span className="modal-badge">🖥 Plataforma Completa</span>
          <h2 className="modal-title" style={{ marginBottom: 6 }}>
            Todo lo que tu restaurante necesita, <span>en un solo lugar</span>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: 16, maxWidth: 560 }}>
            Desde el menú digital hasta la cocina y la caja — gestiona todo tu restaurante en tiempo real sin complicaciones.
          </p>

          {/* Screen tabs */}
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {SCREENS.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveScreen(s.id)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 20,
                  border: activeScreen === s.id ? "none" : "1.5px solid #e0e0e0",
                  background: activeScreen === s.id ? "#111" : "#fff",
                  color: activeScreen === s.id ? "#fff" : "#555",
                  fontSize: "0.78rem",
                  fontWeight: activeScreen === s.id ? 600 : 400,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  transition: "all 0.15s",
                }}
              >
                <span style={{ fontSize: "0.7rem" }}>{s.icon}</span>
                {s.label}
                {s.id === "cliente" && (
                  <span style={{ background: "#22c55e", color: "#fff", fontSize: "0.6rem", padding: "1px 5px", borderRadius: 8, marginLeft: 2 }}>Cliente</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Preview area */}
        <div style={{ flex: 1, padding: "16px 28px 22px", minHeight: 0, display: "flex", justifyContent: isClienteView ? "center" : "stretch" }}>
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid #e8e8e8",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              width: isClienteView ? 340 : "100%",
              height: isClienteView ? 520 : 400,
              position: "relative",
              transition: "all 0.2s",
            }}
          >
            {/* Browser chrome for admin views */}
            {!isClienteView && (
              <div style={{ background: "#f5f5f5", borderBottom: "1px solid #e8e8e8", padding: "6px 10px", display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
                <div style={{ flex: 1, background: "#ebebeb", borderRadius: 4, height: 16, marginLeft: 8, display: "flex", alignItems: "center", paddingLeft: 8 }}>
                  <span style={{ fontSize: 9, color: "#999" }}>app.menukodra.com/{activeScreen}</span>
                </div>
              </div>
            )}
            {/* Phone frame for cliente */}
            {isClienteView && (
              <div style={{ position: "absolute", inset: 0, background: "#111", borderRadius: 12, zIndex: -1 }} />
            )}
            <div style={{ height: isClienteView ? "100%" : "calc(100% - 29px)", overflow: "hidden" }}>
              {renderScreen()}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div style={{ borderTop: "1px solid #f0f0f0", padding: "14px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, flexWrap: "wrap", gap: 10 }}>
          <p style={{ color: "var(--muted)", fontSize: "0.85rem", margin: 0 }}>
            🎁 Prueba gratis 14 días · Sin tarjeta de crédito
          </p>
          <a
            href="https://wa.me/5573253518?text=Hola,%20quiero%20ver%20una%20demo%20de%20Menukodra."
            target="_blank"
            rel="noreferrer"
            className="btn-pulse"
            style={{ padding: "10px 22px", fontSize: "0.9rem" }}
          >
            Solicitar Demo Personalizada
          </a>
        </div>
      </div>
    </div>
  );
}
