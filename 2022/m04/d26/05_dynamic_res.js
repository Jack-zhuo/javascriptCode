const http = require("http");
const server = http.createServer();
server.on('request',function(req,res){
    let content = "404 is not found."
     if (req.url === "/" || req.url === '/index.html') {
         content = "<h1>index</h1>";
     }else if (req.url === '/about.html') {
         content = "<h1>about</h1>"
     }
     res.end(content);
});
server.listen(80,function(){
    console.log("server is running............");
});