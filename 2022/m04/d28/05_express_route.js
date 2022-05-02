const express = require('express');
const router = require('./06_router');
const app = express();

app.use('/api',router);

app.listen(80,() =>{
    console.log("server is running..");
})