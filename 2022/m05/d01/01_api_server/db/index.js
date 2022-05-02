// importing mysql module.
const mysql = require('mysql');

// create database connection object.
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'my_db01'
});

module.exports = db;