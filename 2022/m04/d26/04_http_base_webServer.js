const http = require("http");
const server = http.createServer();
const fs = require("fs");
const path = require("path");

server.on("request",function(req,res){
    
    const url = req.url;
    res.end(url);

})

server.listen(80,function(){
    console.log("server is running....");
})