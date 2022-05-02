const express = require('express');
const app = express();
const router = require('./10_api_router')
// app.use(express.urlencoded({ extended: false}));
const cors = require('cors');
app.use(cors());
app.use('/api',router);

app.listen('80',()=>{
    console.log("express server is running...");
})