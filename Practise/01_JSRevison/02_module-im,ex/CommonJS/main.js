/** 
//~1
require ("./abc.js")
let a=5, b=10;

const add= (x,y)=>{
return x+y;
}

let c = add(a,b);

console.log("sum: ",c)
*/

//~2
// let obj = require ("./abc.js")
// let a=5, b=10;

// let c = obj.sum(a,b);

// console.log(obj.details);

// console.log("sum: ",c);



//~3
const {details,sum} = require ("./abc.js")
let a=5, b=10;

let c = sum(a,b);

console.log(details);

console.log("sum: ",c);


