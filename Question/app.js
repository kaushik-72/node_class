const fs = require("fs");

const a =45;
const b =9;

const addition = a+b;
const subtraction = a-b;
const multiply = a*b;

let divison;
if(b===0){
    console.log("divison error: " , `${a}/${b}`);
    
}
else{
    divison = a/b;
    console.log("File Created with result and no error");
    
}

const result = `
Additon: ${addition}
Subtraction: ${subtraction}
Multiply: ${multiply}
Divison: ${divison}

`


fs.writeFileSync("demo.txt",result);