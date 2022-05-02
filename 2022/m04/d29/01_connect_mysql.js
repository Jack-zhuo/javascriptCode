const mysql = require('mysql');

const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'my_db01'
});
const data = {username:'小明',password:"99999999"};

// const strSql = "insert into users (username,password) values (?,?);"
// const strSql = "insert into users set ?";
// const user = {id:8,username:'桑奎',password: '666666',status:0};
// const strSql = "update users set ? where id = ? "
// db.query(strSql,[user,user.id],(err,results)=>{
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) return console.log("updating successfully.")
// })
// const str = 'delete from users where id = ?';
// db.query(str,9,(err,results)=>{
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log("delete successfully.");
// })
 const str = 'update users set status = ? where id = ?';
 db.query(str,[0,4],(err,results)=>{
     if (err) return console.log(err.message);
     if (results.affectedRows === 1) console.log("updating successfully...");
 })