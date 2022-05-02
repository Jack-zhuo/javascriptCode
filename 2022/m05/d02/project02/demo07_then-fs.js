import thenFs from 'then-fs';

thenFs.readFile('./files/1.txt','utf-8').then((r)=>{
    console.log(r);
    return thenFs.readFile('./files/2.txt','utf-8')
})
.then((r)=>{
    console.log(r);
    return thenFs.readFile('./files/3.txt','utf-8')
})
.then((r)=>{
    console.log(r);
})