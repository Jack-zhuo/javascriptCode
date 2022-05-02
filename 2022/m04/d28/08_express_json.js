const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});


app.listen(80, () => {
    console.log("server is running...")
});
