const express = require('express');
const path = require('path');

const app = express();

// Servir la carpeta "dist" generada por Angular
app.use(express.static(path.join(__dirname, 'dist/open-blind-front')));

// Redirige todas las rutas al archivo index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/core/dashboard'));
});

// Usa el puerto asignado por Railway o un puerto local
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
