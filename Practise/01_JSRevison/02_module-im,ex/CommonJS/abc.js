/** 
//~1
const add= (x,y)=>{
return x+y;
};

module.export = add;

console.log("imported ~1 using require and using module.exports")
*/

//~2 & 3
const add= (x,y)=>{
return x+y;
};

let x= [{work:"hiker", place:"chile"}];

module.exports = {
    details: x,
    sum:add
}

console.log("imported ~2 using require,using module.exports,destructuring")

