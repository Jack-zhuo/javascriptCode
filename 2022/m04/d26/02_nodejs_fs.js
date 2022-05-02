const fs = require('fs');

fs.readFile("./zhuoyue.txt",'utf-8',function(err,data){
  const oldArr = data.split(' ');
  const newArr = [];
  oldArr.forEach((item,index)=>{
      newArr.push(item.replace('=',':'));
  })
 const newStr = newArr.join('\r\n');
  console.log(newStr);
  fs.writeFile('./zhuoyue.txt',newStr,function(err){
      console.log(err);
  })
  
})