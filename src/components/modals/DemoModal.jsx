"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const SCREENS = [
  { id: "menu", icon: "✦" },
  { id: "mesas", icon: "⊞" },
  { id: "cocina", icon: "◉" },
  { id: "caja", icon: "▣" },
  { id: "reportes", icon: "↑" },
  { id: "cliente", icon: "◎" },
];

/* ─── Mockup screens ─────────────────────────────────────── */

function MenuScreen() {
  const { t, language } = useLanguage();
  
  const categories = [
    {
      name: t("demoModal", "tacos"),
      count: 3,
      items: [
        { name: t("demoModal", "taco_bistec"), price: t("demoModal", "taco_bistec_price"), active: true },
        { name: t("demoModal", "taco_pastor"), price: t("demoModal", "taco_pastor_price"), tag: t("demoModal", "tag_picante"), active: true },
        { name: t("demoModal", "taco_pollo"), price: t("demoModal", "taco_pollo_price"), tag: t("demoModal", "tag_vegetariano"), active: false },
      ],
    },
    {
      name: t("demoModal", "bebidas"),
      count: 2,
      items: [
        { name: t("demoModal", "agua_fresca"), price: t("demoModal", "agua_fresca_price"), active: true },
        { name: t("demoModal", "refresco"), price: t("demoModal", "refresco_price"), active: true },
      ],
    },
    {
      name: t("demoModal", "postres"),
      count: 1,
      items: [{ name: t("demoModal", "churros"), price: t("demoModal", "churros_price"), active: false }],
    },
  ];

  const sidebarItems = [
    t("demoModal", "tab_menu"),
    t("demoModal", "tab_mesas"),
    t("demoModal", "tab_cocina"),
    t("demoModal", "tab_caja"),
    t("demoModal", "tab_reportes"),
    language === "es" ? "Ajustes" : "Settings"
  ];

  return (
    <div style={{ display: "flex", height: "100%", background: "#f9f9f9", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 11 }}>
      {/* Sidebar */}
      <div style={{ width: 90, background: "#fff", borderRight: "1px solid #eee", padding: "10px 0", display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ padding: "6px 10px", fontSize: 9, color: "#999", fontWeight: 600, letterSpacing: 1 }}>MENUKODRA</div>
        <div style={{ padding: "2px 10px", fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>Tacos Don Pepe</div>
        {sidebarItems.map((item, i) => (
          <div key={item} style={{ padding: "5px 10px", background: i === 0 ? "#111" : "transparent", color: i === 0 ? "#fff" : "#555", borderRadius: 4, margin: "0 6px", cursor: "default", fontSize: 10 }}>
            {item}
          </div>
        ))}
      </div>
      {/* Content */}
      <div style={{ flex: 1, padding: 14, overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>{t("demoModal", "tab_menu")}</span>
          <div style={{ background: "#111", color: "#fff", padding: "4px 10px", borderRadius: 5, fontSize: 10, cursor: "default" }}>{t("demoModal", "new_category")}</div>
        </div>
        {categories.map((cat) => (
          <div key={cat.name} style={{ background: "#fff", border: "1px solid #eee", borderRadius: 8, marginBottom: 10, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", borderBottom: "1px solid #f0f0f0" }}>
              <span style={{ fontWeight: 600, color: "#111" }}>{cat.name}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#aaa", fontSize: 10 }}>{cat.count} {t("demoModal", "platillos")}</span>
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
                    <span style={{ marginLeft: 5, background: item.tag === t("demoModal", "tag_picante") ? "#fff0f0" : "#f0fff4", color: item.tag === t("demoModal", "tag_picante") ? "#e55" : "#2a8", padding: "1px 5px", borderRadius: 3, fontSize: 9 }}>
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
            <div style={{ padding: "5px 10px", color: "#888", fontSize: 10, cursor: "default" }}>{t("demoModal", "add_platillo")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MesasScreen() {
  const { t, language } = useLanguage();
  
  const tables = [
    { num: "#1", label: language === "es" ? "Mesa 1" : "Table 1", status: t("demoModal", "table_status_active") },
    { num: "#2", label: language === "es" ? "Mesa 2" : "Table 2", status: t("demoModal", "table_status_active") },
    { num: "#3", label: language === "es" ? "Terraza 1" : "Terrace 1", status: t("demoModal", "table_status_active") },
  ];

  const sidebarItems = [
    t("demoModal", "tab_menu"),
    t("demoModal", "tab_mesas"),
    t("demoModal", "tab_cocina"),
    t("demoModal", "tab_caja"),
    t("demoModal", "tab_reportes"),
    language === "es" ? "Ajustes" : "Settings"
  ];

  return (
    <div style={{ display: "flex", height: "100%", background: "#f9f9f9", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 11 }}>
      <div style={{ width: 90, background: "#fff", borderRight: "1px solid #eee", padding: "10px 0", display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ padding: "6px 10px", fontSize: 9, color: "#999", fontWeight: 600, letterSpacing: 1 }}>MENUKODRA</div>
        <div style={{ padding: "2px 10px", fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>Tacos Don Pepe</div>
        {sidebarItems.map((item, i) => (
          <div key={item} style={{ padding: "5px 10px", background: i === 1 ? "#111" : "transparent", color: i === 1 ? "#fff" : "#555", borderRadius: 4, margin: "0 6px", cursor: "default", fontSize: 10 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <span style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>{t("demoModal", "tab_mesas")}</span>
          <div style={{ background: "#111", color: "#fff", padding: "4px 10px", borderRadius: 5, fontSize: 10, cursor: "default" }}>{t("demoModal", "new_table")}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px 80px 80px", padding: "6px 12px", borderBottom: "1px solid #f0f0f0", color: "#999", fontWeight: 600, fontSize: 10 }}>
            <span>{t("demoModal", "col_num")}</span><span>{t("demoModal", "col_label")}</span><span>{t("demoModal", "col_status")}</span><span>{t("demoModal", "col_qr")}</span><span>{t("demoModal", "col_actions")}</span>
          </div>
          {tables.map((tItem) => (
            <div key={tItem.num} style={{ display: "grid", gridTemplateColumns: "40px 1fr 80px 80px 80px", padding: "7px 12px", borderBottom: "1px solid #fafafa", alignItems: "center" }}>
              <span style={{ fontWeight: 500 }}>{tItem.num}</span>
              <span>{tItem.label}</span>
              <span style={{ color: "#22c55e", background: "#f0fdf4", padding: "2px 7px", borderRadius: 10, fontSize: 9, display: "inline-block", width: "fit-content" }}>{tItem.status}</span>
              <span style={{ color: "#555", fontSize: 10, cursor: "default" }}>{t("demoModal", "view_qr")}</span>
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
  const { t, language } = useLanguage();
  const tableLabel = language === "es" ? "Mesa 1" : "Table 1";

  return (
    <div style={{ height: "100%", background: "#0a0a0a", fontFamily: "system-ui, sans-serif", fontSize: 11, color: "#fff", padding: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13 }}>◉ {t("demoModal", "tab_cocina")}</div>
          <div style={{ color: "#666", fontSize: 10 }}>Tacos Don Pepe</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10 }}>
          <div style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%" }} />
          <span style={{ color: "#22c55e" }}>{t("demoModal", "live")}</span>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {/* Recibidas */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <div style={{ width: 18, height: 18, background: "#f59e0b", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>1</div>
            <span style={{ fontWeight: 600 }}>{t("demoModal", "received")}</span>
          </div>
          <div style={{ background: "#7c3a00", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 10px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontWeight: 700 }}>{tableLabel}</span>
                <span style={{ color: "#aaa", fontSize: 9 }}>#2361</span>
              </div>
              <span style={{ color: "#aaa", fontSize: 9 }}>⏱ 2s</span>
            </div>
            <div style={{ padding: "8px 10px" }}>
              <div style={{ display: "flex", gap: 6 }}><span style={{ color: "#aaa" }}>1×</span><span>{t("demoModal", "churros")}</span></div>
              <div style={{ color: "#aaa", fontSize: 10, marginTop: 2, fontStyle: "italic" }}>&quot;{t("demoModal", "churros_note")}&quot;</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", margin: "0 8px 8px", borderRadius: 5, padding: "5px 0", textAlign: "center", cursor: "default", fontSize: 10 }}>
              {t("demoModal", "accept")}
            </div>
          </div>
        </div>
        {/* En preparación */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
            <div style={{ width: 18, height: 18, background: "#3b82f6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>1</div>
            <span style={{ fontWeight: 600 }}>{t("demoModal", "preparing")}</span>
          </div>
          <div style={{ background: "#1e3a6e", borderRadius: 8, overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "7px 10px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontWeight: 700 }}>{tableLabel}</span>
                <span style={{ color: "#aaa", fontSize: 9 }}>#8C43</span>
              </div>
              <span style={{ color: "#aaa", fontSize: 9 }}>⏱ 24s</span>
            </div>
            <div style={{ padding: "8px 10px" }}>
              <div style={{ display: "flex", gap: 6 }}><span style={{ color: "#aaa" }}>1×</span><span>{t("demoModal", "taco_bistec")}</span></div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", margin: "0 8px 8px", borderRadius: 5, padding: "5px 0", textAlign: "center", cursor: "default", fontSize: 10 }}>
              {t("demoModal", "mark_ready")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CajaScreen() {
  const { t, language } = useLanguage();
  const tableLabel = language === "es" ? "Mesa 1" : "Table 1";
  
  const sidebarItems = [
    t("demoModal", "tab_menu"),
    t("demoModal", "tab_mesas"),
    t("demoModal", "tab_cocina"),
    t("demoModal", "tab_caja"),
    t("demoModal", "tab_reportes"),
    language === "es" ? "Ajustes" : "Settings"
  ];

  return (
    <div style={{ display: "flex", height: "100%", background: "#f9f9f9", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 11 }}>
      <div style={{ width: 90, background: "#fff", borderRight: "1px solid #eee", padding: "10px 0", display: "flex", flexDirection: "column", gap: 2 }}>
        <div style={{ padding: "6px 10px", fontSize: 9, color: "#999", fontWeight: 600, letterSpacing: 1 }}>MENUKODRA</div>
        <div style={{ padding: "2px 10px", fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>Tacos Don Pepe</div>
        {sidebarItems.map((item, i) => (
          <div key={item} style={{ padding: "5px 10px", background: i === 3 ? "#111" : "transparent", color: i === 3 ? "#fff" : "#555", borderRadius: 4, margin: "0 6px", cursor: "default", fontSize: 10 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 14 }}>
        <div style={{ marginBottom: 14 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>{t("demoModal", "caja_title")}</div>
          <div style={{ color: "#999", fontSize: 10 }}>{t("demoModal", "caja_sub")}</div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #eee", borderRadius: 10, padding: 12, width: 160 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
            <span style={{ fontWeight: 600 }}>{tableLabel}</span>
            <span style={{ color: "#22c55e", fontSize: 9, background: "#f0fdf4", padding: "1px 6px", borderRadius: 10 }}>{t("demoModal", "table_status_active")}</span>
          </div>
          <div style={{ color: "#999", fontSize: 9, marginBottom: 6 }}>⏱ 5h 0m</div>
          <div style={{ fontWeight: 700, fontSize: 20, color: "#111", marginBottom: 8 }}>{t("demoModal", "caja_total")}</div>
          <div style={{ border: "1px solid #eee", borderRadius: 6, padding: "5px 0", textAlign: "center", fontSize: 10, color: "#555", cursor: "default" }}>
            {t("demoModal", "view_bill")}
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportesScreen() {
  const { t, language } = useLanguage();

  const rows = language === "es" ? [
    { date: "21/04/2026", sessions: 6, sales: "$2,779", tip: "$51.8", total: "$2,830.8", bar: 28 },
    { date: "25/04/2026", sessions: 21, sales: "$9,799", tip: "$306.55", total: "$10,105.55", bar: 100 },
    { date: "02/05/2026", sessions: 25, sales: "$13,175", tip: "$682.95", total: "$13,857.95", bar: 100 },
    { date: "09/05/2026", sessions: 29, sales: "$14,992", tip: "$783.4", total: "$15,775.4", bar: 100 },
    { date: "10/05/2026", sessions: 18, sales: "$9,978", tip: "$569.65", total: "$10,547.65", bar: 95 },
    { date: "15/05/2026", sessions: 8, sales: "$3,204", tip: "$196.2", total: "$3,400.2", bar: 34 },
  ] : [
    { date: "21/04/2026", sessions: 6, sales: "$138.95", tip: "$20.84", total: "$159.79", bar: 28 },
    { date: "25/04/2026", sessions: 21, sales: "$489.95", tip: "$73.49", total: "$563.44", bar: 100 },
    { date: "02/05/2026", sessions: 25, sales: "$658.75", tip: "$98.81", total: "$757.56", bar: 100 },
    { date: "09/05/2026", sessions: 29, sales: "$749.60", tip: "$112.44", total: "$862.04", bar: 100 },
    { date: "10/05/2026", sessions: 18, sales: "$498.90", tip: "$74.84", total: "$573.74", bar: 95 },
    { date: "15/05/2026", sessions: 8, sales: "$160.20", tip: "$24.03", total: "$184.23", bar: 34 },
  ];

  const sidebarItems = [
    t("demoModal", "tab_menu"),
    t("demoModal", "tab_mesas"),
    t("demoModal", "tab_cocina"),
    t("demoModal", "tab_caja"),
    t("demoModal", "tab_reportes"),
    language === "es" ? "Ajustes" : "Settings"
  ];

  return (
    <div style={{ display: "flex", height: "100%", background: "#f9f9f9", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 11, overflow: "hidden" }}>
      <div style={{ width: 90, background: "#fff", borderRight: "1px solid #eee", padding: "10px 0", display: "flex", flexDirection: "column", gap: 2, flexShrink: 0 }}>
        <div style={{ padding: "6px 10px", fontSize: 9, color: "#999", fontWeight: 600, letterSpacing: 1 }}>MENUKODRA</div>
        <div style={{ padding: "2px 10px", fontSize: 10, fontWeight: 700, color: "#111", marginBottom: 8 }}>Tacos Don Pepe</div>
        {sidebarItems.map((item, i) => (
          <div key={item} style={{ padding: "5px 10px", background: i === 4 ? "#111" : "transparent", color: i === 4 ? "#fff" : "#555", borderRadius: 4, margin: "0 6px", cursor: "default", fontSize: 10 }}>
            {item}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: 14, overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#111" }}>{t("demoModal", "reportes_title")}</div>
            <div style={{ color: "#999", fontSize: 10 }}>{t("demoModal", "reportes_sub")}</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ border: "1px solid #ddd", borderRadius: 5, padding: "3px 8px", fontSize: 10, cursor: "default", color: "#555" }}>↓ CSV</div>
            <div style={{ border: "1px solid #ddd", borderRadius: 5, padding: "3px 8px", fontSize: 10, cursor: "default", color: "#555" }}>↓ PDF</div>
          </div>
        </div>
        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 12 }}>
          {[
            { label: t("demoModal", "tot_sales"), value: language === "es" ? "$223,675" : "$11,183.75", color: "#22c55e" },
            { label: t("demoModal", "tot_tip"), value: language === "es" ? "$12,486.1" : "$1,872.90", color: "#3b82f6" },
            { label: t("demoModal", "avg_ticket"), value: language === "es" ? "$510.67" : "$25.53", color: "#f59e0b" },
            { label: t("demoModal", "sessions_closed"), value: "438", color: "#a855f7" },
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
            <span>{t("demoModal", "col_date")}</span><span>{t("demoModal", "col_sessions")}</span><span>{t("demoModal", "col_sales")}</span><span>{t("demoModal", "col_tip")}</span><span>{t("demoModal", "col_total")}</span><span>{t("demoModal", "col_graph")}</span>
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
  const { t, language } = useLanguage();
  const tableLabel = language === "es" ? "Mesa 1" : "Table 1";
  
  const tabs = [t("demoModal", "tacos"), t("demoModal", "bebidas"), t("demoModal", "postres")];
  
  const items = {
    [t("demoModal", "tacos")]: [
      { name: t("demoModal", "taco_bistec"), desc: t("demoModal", "steak_desc"), price: t("demoModal", "client_bistec_price"), time: "10 min" },
      { name: t("demoModal", "taco_pastor"), desc: t("demoModal", "pastor_desc"), price: t("demoModal", "client_pastor_price"), time: "10 min", tag: language === "es" ? "Picante" : "Spicy" },
      { name: t("demoModal", "taco_pollo"), desc: t("demoModal", "pollo_desc"), price: t("demoModal", "client_pollo_price"), time: "8 min", tag: language === "es" ? "Vegetariano" : "Vegetarian" },
    ],
    [t("demoModal", "bebidas")]: [
      { name: t("demoModal", "agua_fresca"), desc: t("demoModal", "agua_desc"), price: t("demoModal", "client_agua_price"), time: "2 min" },
      { name: t("demoModal", "refresco"), desc: t("demoModal", "refresco_desc"), price: t("demoModal", "client_refresco_price"), time: "1 min" },
    ],
    [t("demoModal", "postres")]: [
      { name: t("demoModal", "churros"), desc: t("demoModal", "churros_desc"), price: t("demoModal", "client_churros_price"), time: "8 min" },
    ],
  };

  const [activeTab, setActiveTab] = useState(t("demoModal", "tacos"));

  useEffect(() => {
    setActiveTab(t("demoModal", "tacos"));
  }, [language]);

  return (
    <div style={{ height: "100%", background: "#fff", color: "#111", fontFamily: "system-ui, sans-serif", fontSize: 12, overflowY: "auto" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, background: "#f0f0f0", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🍽</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 12 }}>Tacos Don Pepe</div>
            <div style={{ color: "#999", fontSize: 10 }}>{tableLabel}</div>
          </div>
        </div>
        <span style={{ fontSize: 14 }}>🌙</span>
      </div>

      {/* Order status */}
      <div style={{ margin: "10px 14px", border: "1px solid #eee", borderRadius: 8, overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 10px", borderBottom: "1px solid #f5f5f5" }}>
          <span style={{ fontWeight: 600, fontSize: 11 }}>{t("demoModal", "my_orders")}</span>
          <span style={{ background: "#fff7ed", color: "#c2692a", padding: "2px 7px", borderRadius: 10, fontSize: 9 }}>● {t("demoModal", "in_process")}</span>
        </div>
        <div style={{ padding: "7px 10px", background: "#f0fdf4", borderBottom: "1px solid #f5f5f5" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#16a34a", fontWeight: 600, fontSize: 10 }}>{t("demoModal", "ready_pickup")}</span>
            <span style={{ color: "#999", fontSize: 9 }}>11:42 a.m.</span>
          </div>
          <div style={{ color: "#555", fontSize: 10, marginTop: 2 }}>• 1× {t("demoModal", "taco_bistec")}</div>
        </div>
        <div style={{ padding: "7px 10px", background: "#fffbeb", borderBottom: "1px solid #f5f5f5" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#d97706", fontWeight: 600, fontSize: 10 }}>{t("demoModal", "preparing_status")}</span>
            <span style={{ color: "#999", fontSize: 9 }}>04:39 p.m.</span>
          </div>
          <div style={{ color: "#555", fontSize: 10, marginTop: 2 }}>• 1× {t("demoModal", "taco_bistec")}</div>
        </div>
        <div style={{ padding: "7px 10px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#888", fontSize: 10 }}>{t("demoModal", "received_status")}</span>
            <span style={{ color: "#999", fontSize: 9 }}>04:39 p.m.</span>
          </div>
          <div style={{ color: "#555", fontSize: 10, marginTop: 2 }}>• 1× {t("demoModal", "churros")}</div>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{ display: "flex", gap: 6, padding: "0 14px", marginBottom: 6 }}>
        {tabs.map((tItem) => (
          <div key={tItem} onClick={() => setActiveTab(tItem)} style={{ padding: "4px 12px", borderRadius: 20, background: activeTab === tItem ? "#111" : "#f5f5f5", color: activeTab === tItem ? "#fff" : "#555", fontSize: 10, cursor: "pointer", fontWeight: activeTab === tItem ? 600 : 400 }}>
            {tItem}
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
                <span style={{ background: item.tag === "Picante" || item.tag === "Spicy" ? "#fff0f0" : "#f0fff4", color: item.tag === "Picante" || item.tag === "Spicy" ? "#e55" : "#2a8", padding: "1px 6px", borderRadius: 3, fontSize: 9 }}>
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
          {t("demoModal", "req_bill")}
        </div>
        <div style={{ textAlign: "center", color: "#888", fontSize: 11, cursor: "default" }}>
          {t("demoModal", "call_waiter")}
        </div>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────── */

export default function DemoModal({ isOpen, onClose }) {
  const [activeScreen, setActiveScreen] = useState("menu");
  const { t } = useLanguage();

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

  const getScreenLabel = (id) => {
    switch(id) {
      case "menu": return t("demoModal", "tab_menu");
      case "mesas": return t("demoModal", "tab_mesas");
      case "cocina": return t("demoModal", "tab_cocina");
      case "caja": return t("demoModal", "tab_caja");
      case "reportes": return t("demoModal", "tab_reportes");
      case "cliente": return t("demoModal", "tab_cliente");
      default: return "";
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
          <span className="modal-badge">{t("demoModal", "badge")}</span>
          <h2 className="modal-title" style={{ marginBottom: 6 }}>
            {t("demoModal", "title")}<span>{t("demoModal", "title_accent")}</span>{t("demoModal", "title_end")}
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: 16, maxWidth: 560 }}>
            {t("demoModal", "desc")}
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
                {getScreenLabel(s.id)}
                {s.id === "cliente" && (
                  <span style={{ background: "#22c55e", color: "#fff", fontSize: "0.6rem", padding: "1px 5px", borderRadius: 8, marginLeft: 2 }}>{t("demoModal", "client_badge")}</span>
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
            {t("demoModal", "scarcity")}
          </p>
          <a
            href={`https://wa.me/5573253518?text=${encodeURIComponent(t("demoModal", "wa_message"))}`}
            target="_blank"
            rel="noreferrer"
            className="btn-pulse"
            style={{ padding: "10px 22px", fontSize: "0.9rem" }}
          >
            {t("demoModal", "btn_submit")}
          </a>
        </div>
      </div>
    </div>
  );
}
