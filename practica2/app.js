const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('craftsy.ejs');
})

app.get('/login', function (req, res) {
    res.render('login.ejs');
})

app.get('/registro', function (req, res) {
    res.render('registro.ejs');
})

app.listen(3000, function(){
    console.log('El servidor corriendo en el puerto 3000');
    
})