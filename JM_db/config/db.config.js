"user strict";
const mysql = require ("mysql2");
const dotenv = require ("dotenv"). config();

//Local muysql dbConn
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'JM_DB',
    connectTimeout: 10000
});

dbConn.connect(function (err){
    if (err) throw err;
    console.log("Database Connected")
})

module.exports = dbConn;