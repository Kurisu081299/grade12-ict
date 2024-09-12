"user strict";
const mysql = require ("mysql2");
const dotenv = require ("dotenv").config();

//Local MYSQL dbConn
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'buendia_db',
    connectTimeout: 10000
});


dbConn.connect(function (err){
    if (err) throw err;
    console.log("Database Connected")
})

module.exports = dbConn;