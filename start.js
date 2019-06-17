const express = require('express');
const ejs = require('ejs');
var mysql = require('mysql');

const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "teatime",
  password: "",
  database: "teatime_db"
});

con.connect(function(error) {
  //if (err) throw err;
  if(!!error) {
    console.log('Error');
  }else{
    console.log("Connecté!");
  }
  });

app.get('/', function(req, resp) {
    //res.setHeader('Content-Type', 'text/plain');
    //res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');
    con.query("SELECT * FROM room", function (error, rows, fields){
        if(!!error) {
          console.log('Error');
        }else {
          console.log('Succes de la requete !\n');
          console.log(rows);
        }
    });
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);
