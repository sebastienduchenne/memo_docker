const mysql = require('mysql');
const express = require('express')
const app = express()


/*
*** bug 
code : 'ER_NOT_SUPPORTED_AUTH_MODE',
errno: 1251,
message 'Client does not support authentication protocol requested by server; consider upgrading MySQL client',


1.sudo mysql
2.ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
3.flush privileges;
*/


app.get('/db', function (req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "toto",
    password: "titi",
    database: "db1",
    port: '3306',
  });
  let test = "non"
  let sql = "select * from articles"
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    test = "oui"
    /*con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });*/
  }); 

  res.send(test)
})
 

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`)
})