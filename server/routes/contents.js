const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

// Habilitar CORS para permitir peticiones desde el frontend
app.use(cors());

// Datos JSON
const data = require("./data/contents.json");

// Endpoint: Obtener todos los módulos
app.get("/api/modules", (req, res) => {
  res.json(data.modules);
});

// Endpoint: Obtener un módulo específico
app.get("/api/modules/:moduleId", (req, res) => {
  const moduleId = parseInt(req.params.moduleId, 10);
  const module = data.modules.find((mod) => mod.id === moduleId);
  module ? res.json(module) : res.status(404).json({ error: "Módulo no encontrado" });
});

// Endpoint: Obtener una sección específica
app.get("/api/modules/:moduleId/sections/:sectionId", (req, res) => {
  const moduleId = parseInt(req.params.moduleId, 10);
  const sectionId = parseInt(req.params.sectionId, 10);
  const module = data.modules.find((mod) => mod.id === moduleId);
  if (module) {
    const section = module.sections.find((sec) => sec.id === sectionId);
    section ? res.json(section) : res.status(404).json({ error: "Sección no encontrada" });
  } else {
    res.status(404).json({ error: "Módulo no encontrado" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
