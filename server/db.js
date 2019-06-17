var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "teatime",
  password: "",
  database: "teatime_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE teatime_db", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  var sql = "CREATE TABLE room (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
