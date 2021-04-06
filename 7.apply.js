/* 
  call and apply almost same but have 1 
  difference
  when you give parameters in a function
  and than you call it with argument than
  your argument should be under [].
*/

function print(msg){
  console.log(msg , this.name)
}

let obj1={
  name: 'Raju',
  Roll: 20
}

let obj2={
  name: 'Elora',
  Roll: 10
}


print.apply(obj1,['hello'])
print.apply(obj2,['hi'])
