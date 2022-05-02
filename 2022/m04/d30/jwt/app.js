const express = require('express');
const app = express();

// importing two package related with jwt, is jsonwebtoken and express-jwt
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const secretKey = 'zy No1 ^_^';

app.use(expressJWT({secret: secretKey}).unless({path: [/^\/api\//]}))

// interface of login
app.post('/api/login', function (req, res) {
    const userinfo = req.body;

    if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
        return res.send({
            status: 400,
            message: 'login failed.'
        })
    }
    const tokenStr = jwt.sign({username: userinfo.username}, secretKey, {expiresIn: '30s'});
    res.send({
        status: 200,
        message: 'login successfully.',
        token: tokenStr,
    })
})
// there is authentication interface
app.get('/admin/getinfo', function (req, res) {
    res.send({
        status: 200,
        message: '获取用户信息成功！',
        data: req.user,
    })
})

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 401,
            message: 'invalid token'
        })
    }
    res.send({
        status: 500,
        message: 'unknown error'
    });
});


app.listen(8888, function () {
    console.log('express server running at http://127.0.0.1:8888');
})











