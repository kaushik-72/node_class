function greet(){
    console.log("hello from function");
    
}

let user = {
    name:"kaushik k",
    age:"24",
    id:1234,
};

function printSomething (){
    console.log("hello from printSomething"); 
    
};

// module.exports = user;  // for exporting one at a time only

module.exports ={
    greet,
    user,
    printSomething,
}
