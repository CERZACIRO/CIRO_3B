const express = require('express')
const app = express()
const connection = require("./services/db")

const port = 8000
app.use(express.json())

app.get('/test/product', (req, res) => { //lavacalola.com/test/product -> path -> ruta
  res.send('Hola, desde el backend.!')
}) //callback

app.post ('/users', async (request, response) => {
  const data = request.body;
  const db = await  connection;
  const nombre_usuario = data.nombre_usuario;
  const contrasena = data.contrasena;
  const nombre_completo = data.nombre_completo;
  const correo_electronico = data.correo_electronico;
  const telefono = data.telefono;
  const rol = data.rol;

  const sql =
  'INSERT INTO `usuarios`(`nombre_usuario`, `contrasena`,`nombre_completo`, `correo_electronico`, `telefono`, `rol`)' +
  `VALUES ("${nombre_usuario}","${contrasena}","${nombre_completo}","${correo_electronico}","${telefono}","${rol}")`;

  const [result, fields] = await db.query(sql);
  
  response.send (result)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})