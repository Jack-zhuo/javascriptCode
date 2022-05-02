const fs = require("fs");
const path = require("path");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
    let url = req.url;
    console.log(url);
    let p = "";
    if (url === "/") {
        p = path.join(__dirname, "./clock/index.html",);
    } else {
        p = path.join(__dirname, "./clock", url);
    }
    fs.readFile(p, 'utf-8', (err, data) => {
        if (err) return res.end('404 is not found..');
        res.end(data);
    });
});

server.listen(80, () => {
    console.log("server is running.........");
})
