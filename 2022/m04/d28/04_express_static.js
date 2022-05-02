// 1. import express
const express = require('express');
// 2. create web server
const app = express();
// 3. calling app.listen function.
app.listen(80,() =>{
    console.log("express server is running.");
})

app.get('/user',(req,res) =>{
    console.log(req.query);
    res.send(req.query);
})