import { log } from "node:console";
import fs from "node:fs";

// fs.writeFile("./demot.txt", "new data",()=>{

// })

// promise / async file
import fsP from "node:fs/promises"
// console.log(fsP);


// let writePromise = fsP.writeFile("./example.csv","this is data")
// writePromise
// .then(()=>{
//     console.log("file created");
    
// })
// .catch((err)=>{
// console.log("error while creating a file");
// console.log(err);


// })
// .finally(()=>{
//     console.log("finally");
    
// });

// console.log(writePromise);

// why are we using then catch in this method

//? reading a file async

// let data = fsP.readFile("./fs.js","utf-8");

// data.then((payload)=>{
//     console.log("payload: ",payload);
    
//     console.log("file read");
    
// })
// .catch((err)=>{
//     console.log("error while reading");
    
// });

async function fsOP(){
    await fsP.writeFile("./server.js", "this is server");
    console.log("1");
    await fsP.appendFile("./server.js", "app 1");
    console.log("2")
    await fsP.appendFile("./server.js", "app 2");
    console.log("3")
    
}
fsOP()

//~ libUV -> file read, db call , network call *async i/o operations*

//! 7 thread 1 main thread , 4 by libuv, 2 garbage collection 





