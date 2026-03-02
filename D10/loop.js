// setTimeout(()=>{
//     console.log(1);
    
// })

// process.nextTick(()=>{
//     console.log(2);
    
// })

//?------------------------

// setTimeout(()=>{
//     console.log(1);
    
// })

// process.nextTick(()=>{
//     console.log(2);

//     process.nextTick(()=>{
//     console.log(3);
    
// })
    
// })

//?-----------------------------


// setTimeout(()=>{
//     console.log(1);

//     process.nextTick(()=>{
//     console.log(5);
// })
    
// })

// process.nextTick(()=>{
//     console.log(2);

//     process.nextTick(()=>{
//     console.log(3);
    
// })
    
// })

// setTimeout(()=>{
//     console.log(4);
    
// })

//! batching only applies on microTask queue (hence the event loop will execute callbacks of microTask queue if present)



// setTimeout(()=>{
//     console.log(1);

//     process.nextTick(()=>{
//     console.log(5);

//     Promise.resolve().then(()=>{
//         console.log(6);
    
// })
// })
    
// })

// process.nextTick(()=>{
//     console.log(2);

//     process.nextTick(()=>{
//     console.log(3);
    
// });

// setTimeout(()=>{
//     console.log(7);
// });
    
// })

// setTimeout(()=>{
//     console.log(4);

//     Promise.resolve().then(()=>{
//         console.log(6)

//     process.nextTick(()=>{
//     console.log(8);
    
// })
//     })

    
    
// })

// process.nextTick(()=>{
//     console.log(10);

//     setTimeout(()=>{
//         console.log(11);
//     })
    
// })
    

//! code to check queue execution
// process.nextTick(()=>{
//     console.log("nt")
// });

// Promise.resolve().then(()=>{
//         console.log("p")
// });

//?-----------------------

const fs = require("fs");

setTimeout(()=>console.log("this is setTimeout 1"), 0);

fs.readFile(__filename,()=>{
    console.log("this is readFile 1");
})










