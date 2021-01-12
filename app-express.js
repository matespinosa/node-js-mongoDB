const express = require('express');
const app = express();

const port = 3000;

app.use(express.static(__dirname + "/public"))


app.get('/', (req, res) => {
  res.send('mi respuesta a express v.5')
})

app.get('/servicios', (req, res) => {
  res.send('Estas en la pagina de servicios')
})


app.listen(port, () => {
  console.log('servidor a su servicio en el puerto', port);
})
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html")
})