var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

app.get('/saloons', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes dans la cave à thé, ces sachets sont à moi !');
});

app.get('/saloon/:idsaloon/home', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    const idsaloon = req.params.idsaloon;
    if(isNaN(idsaloon)){
        res.status(404).send('Page introuvable !');
    }
    res.end('Vous êtes à la chambre de l\'étage n°' + req.params.idsaloon);
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);