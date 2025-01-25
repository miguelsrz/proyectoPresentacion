// const express = require('express');
// const router = express.Router();
// const db = require('../db'); // Configuración de la base de datos

// // Guardar progreso
// router.post('/', (req, res) => {
//   const { userId, moduleId, sectionType, completed, score } = req.body;

//   const query = `
//     INSERT INTO progress (userId, moduleId, sectionType, completed, score)
//     VALUES (?, ?, ?, ?, ?)
//     ON DUPLICATE KEY UPDATE completed = VALUES(completed), score = VALUES(score)
//   `;

//   db.query(query, [userId, moduleId, sectionType, completed, score], (err) => {
//     if (err) {
//       console.error('Error al guardar el progreso:', err);
//       return res.status(500).send('Error al guardar el progreso');
//     }
//     res.status(201).send('Progreso guardado correctamente');
//   });
// });

// module.exports = router;
