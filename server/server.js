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

const validarUsuarioActivo = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log("Token recibido:", token);
  
  if (!token) {
      console.log("❌ No se recibió token");
      return res.status(401).json({ error: "No autenticado" });
  }

  try {
      const [results] = await db.query("SELECT usuario_id FROM sesiones WHERE token = ? LIMIT 1", [token]);
      console.log("Resultados de la consulta:", results);

      if (results.length === 0) {
          console.log("❌ Token no encontrado en la base de datos");
          return res.status(401).json({ error: "Sesión inválida" });
      }

      req.usuarioID = results[0].usuario_id;
      console.log("✅ Usuario validado:", req.usuarioID);
      next();
  } catch (error) {
      console.error("⚠️ Error en validación de sesión:", error);
      res.status(500).json({ error: "Error en validación de sesión" });
  }
};

// // Endpoint para obtener datos del usuario
// app.get('/api/usuario', async (req, res) => {
//   const { usuario_id } = req.query;
//   try {
//     const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [req.usuarioID]);
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


// Obtener usuario activo desde la tabla de sesiones
// const obtenerUsuarioActivo = async (token) => {
//   return new Promise((resolve, reject) => {
//       db.query("SELECT usuario_id FROM sesiones WHERE token = ? LIMIT 1", [token], (err, results) => {
//           if (err) return reject(err);
//           resolve(results.length > 0 ? results[0].usuario_id : null);
//       });
//   });
// };

app.get('/api/sesiones',  async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM sesiones'  );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el progreso' });
  }
});

app.delete("/api/sesiones", async (req, res) => {
  const { usuario_id } = req.body;

  if (!usuario_id) return res.status(400).json({ error: "ID de usuario requerido" });

  try {
    await db.query("DELETE FROM sesiones WHERE usuario_id = ?", [usuario_id]);
    res.json({ success: true, message: "Sesión eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar sesiones previas" });
  }
});

app.post("/api/sesiones", async (req, res) => {
  const { usuario_id, token } = req.body;

  if (!usuario_id || !token) return res.status(400).json({ error: "Datos incompletos" });

  try {
    await db.query("INSERT INTO sesiones (usuario_id, token) VALUES (?, ?)", [usuario_id, token]);
    res.json({ success: true, message: "Sesión creada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar sesión" });
  }
});

app.get('/api/progreso', validarUsuarioActivo, async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM progreso WHERE usuario_id = ?', [req.usuarioID]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el progreso' });
  }
});

// Endpoint: Registrar progreso

app.post('/api/progreso', validarUsuarioActivo, async (req, res) => {
  const {contenido_id, visto } = req.body;

  try {
    

    if (visto) {
      // Si se marca como visto, se inserta en la base de datos
      await db.query(
        `INSERT INTO progreso (usuario_id, contenido_id, visto, fecha_visto) 
         VALUES (?, ?, ?, NOW()) 
         ON DUPLICATE KEY UPDATE visto = VALUES(visto), fecha_visto = VALUES(fecha_visto)`,
        [req.usuarioID,contenido_id, visto]
      );
    } else {
      // Si se marca como no visto, se elimina de la base de datos
      await db.query(
        `DELETE FROM progreso WHERE usuario_id = ? AND contenido_id = ?`,
        [req.usuarioID,contenido_id]
      );
    }
    res.json({ message: 'Progreso actualizado correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar progreso' });
  }
});

// Endpoint: Obtener puntajes de un usuario
app.get('/api/puntajes', validarUsuarioActivo, async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM puntajes WHERE usuario_id = ?', [req.usuarioID]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los puntajes' });
  }
});

// Endpoint: Registrar puntaje
app.post('/api/puntajes', validarUsuarioActivo, async (req, res) => {
  const { quiz_id, puntaje, completado } = req.body;
  const fecha = new Date();

  console.log(completado)
  if(completado) {
    try {
      await db.query(
        `DELETE FROM puntajes WHERE usuario_id = ? AND quiz_id = ?`,
        [req.usuarioID,quiz_id]
      );

      const [result] = await db.query(
        `INSERT INTO puntajes (usuario_id, quiz_id, puntaje, fecha) 
         VALUES (?, ?, ?, ?)`,
        [req.usuarioID, quiz_id, puntaje, fecha]
      );
          res.json({ message: 'Puntaje registrado', id: result.insertId });
        } catch (err) {
          res.status(500).json({ error: 'Error al registrar el puntaje' });
        }
  } else 
  {
    try {
      const [result] = await db.query(
        `INSERT INTO puntajes (usuario_id, quiz_id, puntaje, fecha) 
         VALUES (?, ?, ?, ?)`,
        [req.usuarioID, quiz_id, puntaje, fecha]
      );
      res.json({ message: 'Puntaje registrado', id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Error al registrar el puntaje' });
    }
  }
});

// app.update('/api/puntajes', validarUsuarioActivo, async (req, res) => {
//   const { quiz_id, puntaje } = req.body;
//   const fecha = new Date();

//   try {
//     const [result] = await db.query(
//       `UPDATE puntajes (usuario_id, quiz_id, puntaje, fecha) 
//        VALUES (?, ?, ?, ?)`,
//       [req.usuarioID, quiz_id, puntaje, fecha]
//     );
//     res.json({ message: 'Puntaje registrado', id: result.insertId });
//   } catch (err) {
//     res.status(500).json({ error: 'Error al registrar el puntaje' });
//   }
// });



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
