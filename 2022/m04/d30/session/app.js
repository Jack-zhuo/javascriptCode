// importing express module.
const express = require('express');
// creating express' server instance.
const app = express();
// configuration session middleware
const session = require('express-session');
app.use(
    session({
        secret: 'zy',
        resave: false,
        saveUninitialized: true,
    })
)

// hosting static pages
app.use(express.static('./pages'));
// parse form data from client.
app.use(express.urlencoded({extended:false}))

// api interface of login
app.post('/api/login',(req,res)=>{
    if (req.body.username !== "zhuoyue" || req.body.password !== "123456"){
        console.log(req.body);
        return res.send({status:1,msg:"login failed."})
    }

    req.session.user = req.body;
    req.session.islogin = true;

    res.send({status: 0, msg:'login successfully'});
})
// interface of getting name
app.get('/api/username',(req,res)=>{
    if (!req.session.islogin){
       return  res.send({status:1,msg:"failed."})
    }
        res.send({
            status:0,
            msg:"successfully",
            username:req.session.user.username
        })

})
// interface of logout
app.post('/api/logout',(req,res)=>{
    req.session.destroy();
    res.send({
        status:0,
        msg:'退出登录成功！！'
    });
})
// calling app.listen()
app.listen(80,()=>{
    console.log("server is running...")
})