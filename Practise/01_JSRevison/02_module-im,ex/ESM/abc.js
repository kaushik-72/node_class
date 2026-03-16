
const add= (x,y)=>{
return x+y;
};

let x= [{work:"hiker", place:"chile"}];

module.exports = {
    details: x,
    sum:add
}

console.log("imported using require and using module.exports")