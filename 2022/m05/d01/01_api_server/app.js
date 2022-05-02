// importing app module.
const express = require('express');
// importing user router module.
const userRouter = require('./router/user');
// create instance of  express server
const app = express();
const joi = require('@hapi/joi')
// importing cors module.
const cors = require('cors');
// register cors as global middleware.
app.use(cors());
// configuration parsing middleware by following code.
app.use(express.urlencoded({ extended:false}));

// res.cc 函数
app.use(function (req,res,next){
    res.cc = function (err, status = 1) {
        res.send({
            status,
            message:err instanceof Error ? err.message : err,
        });
    }
    next();
})
const expressJWT = require('express-jwt');
const config = require('./config');
app.use(expressJWT({secret:config.jwtSecretKey }).unless({ path:/^\/api/}));
// register user router module.
app.use('/api',userRouter);

// define error's middleware
app.use((err,req,res,next) => {
    if (err instanceof joi.ValidationError) return res.cc(err);
    res.cc(err);
})





app.listen(3007,()=>{
    console.log('express server is running..')
})