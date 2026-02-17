// let abc = require("./file1"); 
//~ for importing one at a time only

let {greet, user , printSomething} = require("./file1");

greet();
console.log(user);
printSomething();

