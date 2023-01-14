let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "98573210",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
    let sql = "SELECT * FROM customers";
    con.query(sql, function(err, result,fields){
       if (err) throw err;
    console.log(fields);
  });
});

async()