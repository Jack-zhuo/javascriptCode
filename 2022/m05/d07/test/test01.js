let fruitlist = [
    { id: 1, fruit: '香橼', pic: '/src/assets/images/1.jpg', price: 5, count: 1, state: true },
    { id: 2, fruit: '柚子', pic: '/src/assets/images/2.jpg', price: 4.5, count: 4, state: true },
    { id: 3, fruit: '橘子', pic: '/src/assets/images/3.jpg', price: 3, count: 1, state: false },
    { id: 4, fruit: '橙子', pic: '/src/assets/images/4.jpg', price: 6, count: 1, state: false },
    { id: 5, fruit: '粑粑柑', pic: '/src/assets/images/5.jpg', price: 6.5, count: 1, state: false },
    { id: 6, fruit: '柠檬', pic: '/src/assets/images/6.jpg', price: 4, count: 1, state: false },
    { id: 7, fruit: '青柠', pic: '/src/assets/images/7.jpg', price: 5.2, count: 1, state: false },
  ]
  function f(){
    let t = 0;
    fruitlist.forEach(e => {
        
        if(e.state){
             t += e.count
        }
        
    });
    return t;
  }
  const total = f();

console.log(total);