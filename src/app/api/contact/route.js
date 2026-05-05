import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req) {
  try {
    const { nombre, contacto, mensaje } = await req.json();

    // Validar que se ha configurado la variable de entorno
    if (!process.env.DATABASE_URL) {
      console.warn("DATABASE_URL no configurada, ignorando guardado en DB");
      return new Response(JSON.stringify({ message: "No DB URL configured" }), { status: 200 });
    }

    // Inicializar la tabla si no existe
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contactos (
        id SERIAL PRIMARY KEY,
        nombre TEXT,
        contacto TEXT,
        mensaje TEXT,
        fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insertar el historial
    await pool.query(
      `INSERT INTO contactos (nombre, contacto, mensaje) VALUES ($1, $2, $3)`,
      [nombre, contacto, mensaje]
    );

    return new Response(JSON.stringify({ message: "Historial guardado exitosamente" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al guardar el contacto:", error);
    return new Response(JSON.stringify({ message: "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
