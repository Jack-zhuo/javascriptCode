const express = require('express');
const router = express.Router();

// in here mount related router...
router.get('/get', (req, res) => {
    // requiring data from the client to server by query string.
    const query = req.query;
    // calling res.send() method, response result of handling to the client.
    res.send({
        status: 0,
        msg: 'get request successfully',
        data: query
    });
})

router.post("/post",(req,res)=>{
    const body = req.body;
    res.send({
       status:0,
       msg:'post request successfully.',
       data: body
    });
});
router.delete("/delete",(req,res)=>{
    res.send({
        status:0,
        msg:'delete request successfully.'
    });
})
module.exports = router;