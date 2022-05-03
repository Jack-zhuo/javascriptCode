import thenFs from "then-fs";
import fs from 'fs';

const arr = [
    thenFs.readFile('./files/1.txt','utf-8'),
    thenFs.readFile('./files/2.txt','utf-8'),
    thenFs.readFile('./files/3.txt','utf-8')
]
// all
Promise.all(arr)
.then(res=>{
    console.log(res);
});
// race
Promise.race(arr)
.then(res => {
    console.log(res);

})
// encapsulating method.
function getFile(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath,'utf-8',(err,data)=>{
            if (err) return reject(err);
            resolve(data);
        })
    })
}
getFile('./files/1.txt').then((r1)=>{
    console.log(r1)
},(r2)=>{
    console.log(r2.message)
});
async function getAllFile() {
    const r1 = await thenFs.readFile('./files/1.txt','utf8');
    console.log(r1);
    const r2 = await thenFs.readFile('./files/2.txt','utf8');
    console.log(r2);
    const r3 = await thenFs.readFile('./files/3.txt','utf8');
    console.log(r3);

}
getAllFile();