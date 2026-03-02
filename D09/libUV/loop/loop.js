// setTimeout

// console.log(process.nextTick);

// process.nextTick(()=>{
//     console.log("this is next tick")
// })

// process.nextTick(()=>{
//     console.log("4")
// })

// console.log("1");
// console.log("2");
// console.log("3");

// console.log(1);

// process.nextTick(()=>{
//     console.log(4)
// })

// console.log(2);

// process.nextTick(()=>{
//     console.log(3)
// })

//! queue -> FIFO

// console.log(1);

// process.nextTick(()=>{
//     console.log(4)
// })

// console.log(2);

// process.nextTick(()=>{
//     console.log(3);

//     process.nextTick(()=>{
//     console.log(5)
// })
   

// console.log(6)
   
// });

//_________________________

// console.log(0);

// process.nextTick(()=>{
//     console.log(1)
// })

// process.nextTick(()=>{
//     console.log(2)

//     process.nextTick(()=>{
//     console.log(3)

    
// })

// console.log(4)
// })

// process.nextTick(()=>{
//     console.log(5)
// })


// console.log(6);

//--------------------------------


// console.log("1");

// process.nextTick(()=>{
//     console.log("2")
// })

// process.nextTick(()=>{
//     console.log("3")
// })


// Promise.resolve().then(()=>{
//     console.log("4")
// })

// process.nextTick(()=>{
//     console.log("5")
// })


// console.log("6");

//----------------------------------------------


// console.log("1");

// process.nextTick(()=>{
//     console.log("2")
// })

// process.nextTick(()=>{
//     console.log("3")

//     process.nextTick(()=>{
//     console.log("3 nested");
// })
// })


// Promise.resolve().then(()=>{
//     console.log("4")
// })

// process.nextTick(()=>{
//     console.log("5")
// })


// console.log("6");

// Promise.resolve().then(()=>{
//     console.log("7");

//     Promise.resolve().then(()=>{
//     console.log("8")
// })
// })

//---------------------------------

// console.log("1");

// process.nextTick(()=>{
//     console.log("2")

//     Promise.resolve().then(()=>{
//     console.log("nested promose inside nextTick")
// })
// })

// process.nextTick(()=>{
//     console.log("3")
// })


// Promise.resolve().then(()=>{
//     console.log("4")

//     process.nextTick(()=>{
//     console.log("nested nextTick inside prmoise")
// })
// })

// process.nextTick(()=>{
//     console.log("5")
// })


// console.log("6");

//! microTask executes task's in *batches*

//--------------------


console.log("1");

process.nextTick(()=>{
    console.log("2")

    Promise.resolve().then(()=>{
    console.log("3")

    Promise.resolve().then(()=>{
    console.log("4")
})
})
})

process.nextTick(()=>{
    console.log("5")
})


Promise.resolve().then(()=>{
    console.log("6")

    process.nextTick(()=>{
    console.log("7")

    process.nextTick(()=>{
    console.log("9")
})
})
})




console.log("10");

















