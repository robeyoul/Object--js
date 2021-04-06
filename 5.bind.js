/* 
  
*/

function print(){
  console.log('hello ' + this.name)
}

let obj1={
  name: 'Raju',
  Roll: 20
}

let obj2={
  name: 'Elora',
  Roll: 10
}


let add1= print.bind(obj1)
let add2= print.bind(obj2)

add1()
add2()