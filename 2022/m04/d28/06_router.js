let express = require('express');
let router = express.Router();
router.get('/user/query', function (req, res) {
    res.send('hello,this is new world....welcome to my life.')
});

router.post('/user/add',function (req, res) {
    res.send('add successfully..');
});

module.exports = router;
