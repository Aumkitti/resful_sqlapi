const mysql = require('mysql')
const dbconfig = require('../config/dbconfig')

const connection = mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database: dbconfig.DB
})

connection.connect(
    (error)=>{
        if(error) throw error;
        console.log("Successfully connected to the datagase....");
    }
)

module.exports = connection;