const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
const dataPath = path.join(__dirname, 'images.json');
const images = JSON.parse(fs.readFileSync(dataPath));
res.render('slike', { images });
});

app.get('/slike', (req, res) => {
const dataPath = path.join(__dirname, 'images.json');
const images = JSON.parse(fs.readFileSync(dataPath));
res.render('slike', { images });
});

app.listen(3000, () => {
    console.log("Server pokrenut na http://localhost:3000");
});