const axios = require('axios');
const mysql = require('mysql');


var con = mysql.createConnection({
    host: "127.45.1.1",
    user: "root",
    password: "rootpassword",
    database: "db1",
    port: '3306',
});
let test = "non"
let sql = "select * from articles"
con.connect(function(err) {
    if (err) throw err;
        console.log("Connected!");
    test = "oui"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}); 

/*axios.get('http://localhost:3606/db').then(resp => {
    console.log(resp.data);
});*/