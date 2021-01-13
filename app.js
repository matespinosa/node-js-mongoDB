// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('estoy respondiendo a tu solicitud v 3')
// })

// const puerto = 3000;
// server.listen(puerto, () => {
//   console.log('Escuchando solicitudes');
// })

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

require('dotenv').config()

const port = process.env.PORT || 3000;

// Conexión a base e datos
const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.hf4nh.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,
  { useNewUrlParser: true, useUnifiedTopology: true }
  )
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))

// Motor de plantillas 
app.set('view engine', 'ejs')
app.set('views', __dirname + "/views");


app.use(express.static(__dirname + "/public"));

// Rutas Web
app.use('/', require('./router/rutasWeb'));
app.use('/mascotas', require('./router/mascotas'))


app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "titulo de lsitio web"
  })
})


app.listen(port, () => {
  console.log('servidor a su servicio en el puerto', port);
})