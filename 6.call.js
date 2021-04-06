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


print.call(obj1)
print.call(obj2)
