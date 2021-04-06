function add(a,b){
  return (a+b) * this.c
}

let obj1={
  c: 10
}

let obj2={
  c: 7
}

// use bind

console.log('-------use bind----------');

let bind1= add.bind(obj1)
console.log(bind1(5,10));

let bind2= add.bind(obj2)
console.log(bind2(5,5));

console.log('-------use call----------');

let call1= add.call(obj1, 5,10)
console.log(call1);
let call2= add.call(obj2, 5,5)
console.log(call2);


console.log('-------use apply----------');

let apply1= add.apply(obj1, [5,10])
console.log(apply1);
let apply2= add.apply(obj2, [5,5])
console.log(apply2);