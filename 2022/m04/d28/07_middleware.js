const express = require('express');
let zy = require('./zyjava-tools');
const app = express();

// app.use(function (req, res, next) {
//     console.log("this is the first middleware...")
//     req.startTime = zy.dateFormat(new Date());
//    next();
// });
// app.use((req,res,next)=>{
//     console.log("this is the second middleware...")
//     next();
// })
const mw = (req,res,next)=>{
    console.log("this is a local middleware..");
    next();
}
    app.get('/user',mw,(req, res) => {
    console.log("this is the the third middleware...");
    throw new Error("server collapse.. ");
    res.send('you are my lover. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--'+req.startTime);
});

// app.use((err,req,res,next)=>{
//     res.send('error:'+err.message);
// });

app.listen(80, () => {
    console.log('server is running....')
});