/* 
  with for in loop we can traverse 
  through the object
  
*/

var obj = {
  fname: 'Robeyoul',
  lname: 'Raju',
  roll: 10,
  married: false,
  fullName: function(){
    return this.fname + ' '+ this.lname
  }
}
/*
for (x in obj){
  console.log(x) // shows keys
}

console.log('-------------------');

for (x in obj){
  console.log(obj[x]) // shows value
}

console.log('-------------------');


for (x in obj){
  console.log(`${x}: ${obj[x]}`);
}
*/

