const express = require('express');
const app = express();
const connection = require('../config/db');
const responsableRoutes = require('./routes/responsableRoutes');
const port = 3000;

// Conectarse a la base de datos
connection.connect(err => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });
  
// Rutas
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});
app.use('/responsables', responsableRoutes);


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
