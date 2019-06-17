const express = require('express');

const app = express();
/*
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.render('/client/src/App.vue');
});

app.get('/rooms', function(req, res) {
    res.render('homePage.ejs');
});

app.get('/room/:idroom/home', function(req, res) {

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

app.listen(8080);*/
