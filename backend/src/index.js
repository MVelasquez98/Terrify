const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('../config/db');
const responsableRoutes = require('./routes/responsableRoutes');
const territorioRoutes = require('./routes/territorioRoutes');
const port = 3000;

// Conectarse a la base de datos
connection.connect(err => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
    } else {
      console.log('Conexión exitosa a la base de datos');
    }
  });
app.use(cors());
// Rutas
app.use('/responsables', responsableRoutes);
app.use('/territorios', territorioRoutes);


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
