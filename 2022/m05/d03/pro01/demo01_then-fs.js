import thenFs from 'then-fs';

thenFs.readFile('./files/1.txt','utf-8')
.then(e=>{
    console.log(e);
    return thenFs.readFile('./files/2.txt','utf-8')
})
.then(e=>{
    console.log(e);
    return thenFs.readFile('./files/3.txt','utf-8')
})
.then(e=>{
    console.log(e);
})
.catch(err=>{
    console.log("error:+++++++++++++++++"+err.message);
})