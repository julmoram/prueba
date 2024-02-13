const express = require('express');
const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.send('Mounstro Julia de ciber');
})

app.listen(port, () => {
    console.log('Escuchando en puerto', port);
})