require('dotenv').config();

const mysql = require('mysql2/promise');

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;;
app.use(express.json());

// Habilitar CORS para permitir peticiones desde el frontend
app.use(cors());


// MANEJO BASE DE DATOS, PROGRESO Y PUNTAJES
// Configuración de la conexión a la base de datos
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'zxczxc',
  database: 'focus'
});

// // Endpoint para obtener datos del usuario
// app.get('/api/usuario', async (req, res) => {
//   const { usuario_id } = req.query;
//   try {
//     const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [usuario_id]);
//     if (rows.length > 0) {
//       res.json(rows[0]); // Retorna el usuario si existe
//     } else {
//       res.status(404).json({ error: 'Usuario no encontrado' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: 'Error al obtener la información del usuario' });
//   }
// });
// Endpoint: Obtener progreso de un usuario

app.get('/api/progreso', async (req, res) => {
  const { usuario_id } = req.query;
  try {
    const [rows] = await db.query('SELECT * FROM progreso WHERE usuario_id = ?', [usuario_id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el progreso' });
  }
});

// Endpoint: Registrar progreso
app.post('/api/progreso', async (req, res) => {
  const { usuario_id, contenido_id, visto } = req.body;

  try {
    if (visto) {
      // Si se marca como visto, se inserta en la base de datos
      await db.query(
        `INSERT INTO progreso (usuario_id, contenido_id, visto, fecha_visto) 
         VALUES (?, ?, ?, NOW()) 
         ON DUPLICATE KEY UPDATE visto = VALUES(visto), fecha_visto = VALUES(fecha_visto)`,
        [usuario_id, contenido_id, visto]
      );
    } else {
      // Si se marca como no visto, se elimina de la base de datos
      await db.query(
        `DELETE FROM progreso WHERE usuario_id = ? AND contenido_id = ?`,
        [usuario_id, contenido_id]
      );
    }
    res.json({ message: 'Progreso actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar progreso' });
  }
});

// Endpoint: Obtener puntajes de un usuario
app.get('/api/puntajes', async (req, res) => {
  const { usuario_id } = req.query;
  try {
    const [rows] = await db.query('SELECT * FROM puntajes WHERE usuario_id = ?', [usuario_id]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los puntajes' });
  }
});

// Endpoint: Registrar puntaje
app.post('/api/puntajes', async (req, res) => {
  const { usuario_id, quiz_id, puntaje } = req.body;
  const fecha = new Date();

  try {
    const [result] = await db.query(
      `INSERT INTO puntajes (usuario_id, quiz_id, puntaje, fecha) 
       VALUES (?, ?, ?, ?)`,
      [usuario_id, quiz_id, puntaje, fecha]
    );
    res.json({ message: 'Puntaje registrado', id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: 'Error al registrar el puntaje' });
  }
});


// MANEJAR CONTENIDOS EN JSON
// Datos JSON
const data = require("./data/contents.json");

// Endpoint: Obtener todos los módulos
app.get("/api/modules", (req, res) => {
  res.json(data.modules);
});

// Endpoint: Obtener un módulo específico
app.get("/api/modules/:moduleId", (req, res) => {
  const moduleId = parseInt(req.params.moduleId, 10);
  const module = data.modules.find((mod) => mod.moduleId === moduleId);
  module ? res.json(module) : res.status(404).json({ error: "Módulo no encontrado" });
});

// Endpoint: Obtener una sección específica
app.get("/api/modules/:moduleId/sections/:sectionId", (req, res) => {
  const moduleId = parseInt(req.params.moduleId, 10);
  const sectionId = parseInt(req.params.sectionId, 10);
  const module = data.modules.find((mod) => mod.moduleId === moduleId);
  if (module) {
    const section = module.sections.find((sec) => sec.sectionId === sectionId);
    section ? res.json(section) : res.status(404).json({ error: "Sección no encontrada" });
  } else {
    res.status(404).json({ error: "Módulo no encontrado" });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
