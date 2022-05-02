const express = require('express');
const app = express();

// app.get('/user',(req,res) =>{
//     res.send({name:'卓越',age:20,gender:'fale'});
//    console.log(req.query);
// })
app.get('/user/:id',(req,res)=>{
  console.log(req.params);
  res.send(req.params);
})

app.post('/user',(req,res) =>{
    res.send('response successfully');
})

app.listen(80,()=>{
    console.log('express server is running...')
});