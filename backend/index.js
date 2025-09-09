import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";

// Cargar variables de entorno
dotenv.config();

const app = express();
app.use(express.json());

// Conexión a Supabase
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("✅ Backend PinzOS CRM funcionando!");
});

// Probar conexión a base de datos
app.get("/test-db", async (req, res) => {
  const { data, error } = await supabase.from("clientes").select("*").limit(5);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
