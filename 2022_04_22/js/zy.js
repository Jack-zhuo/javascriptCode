function resolveData(data){
    var arr = [];
    for (let k in data) {
        arr.push(k + '=' + data[k]);
    }
    return arr.join('&');
}

  function zy(options){
    let data =  resolveData(options.data);
    console.log(data);
}