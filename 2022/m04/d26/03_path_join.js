const fs = require('fs');
const path = require('path');

const p = path.join(__dirname,'./zhuoyue.txt');
fs.readFile(p,'utf-8',(err,data)=>{
    if(err){
        console.log("reading fail...");
    }
    console.log("reading successssssssss");
    console.log(data);
})