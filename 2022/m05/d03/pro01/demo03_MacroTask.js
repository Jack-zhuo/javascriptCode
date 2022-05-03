setTimeout(function () {
    console.log(1);
})

new Promise(function (r) {
    console.log(2);
    r();
}).then(function () {
    console.log(3);
})

console.log(4);