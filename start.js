const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

app.get('/rooms', function(req, res) {
    res.render('room/home.ejs');
});

app.get('/rooms/:idroom/home', function(req, res) {
    
    const idroom = req.params.idroom;
    if(isNaN(idroom)){
        res.status(404).send('Page introuvable !');
    }
    res.render('room/home.ejs', {id: idroom});
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);