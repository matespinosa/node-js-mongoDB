// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('estoy respondiendo a tu solicitud v 3')
// })

// const puerto = 3000;
// server.listen(puerto, () => {
//   console.log('Escuchando solicitudes');
// })

const express = require('express');
const app = express();

const port = 3000;

// Motor de plantillas 
app.set('view engine', 'ejs')
app.set('views', __dirname + "/views");


app.use(express.static(__dirname + "/public"))


app.get('/', (req, res) => {
  res.render("index", {title : "mi titulo dinámico"})
})

app.get('/servicios', (req, res) => {
  res.render("servicios", {titleServices: "Este es un mensaje dinámico de servicios"})
})


app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "titulo de lsitio web"
  })
})


app.listen(port, () => {
  console.log('servidor a su servicio en el puerto', port);
})