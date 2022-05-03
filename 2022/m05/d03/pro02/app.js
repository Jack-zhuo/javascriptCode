import express from 'express';
import mysql from 'mysql2';

const app = express();

const db = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'root',
    database:'my_db01'
});

db.query('select id, username from ev_users',function (err, results) {
    console.log(results.length);
    console.log(results);
    app.get('/user', function (req, res) {
        res.send({
            status: 0,
            message: "successfully...",
            data: results
        })
    })

})


app.listen(80, function () {
    console.log("express server running......")
})