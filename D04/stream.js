import fs from 'node/fs'

//? event module
// emit ("eventName", data)
// on ("eventName", ()=>{})

let readStream = createReadStream({
    encoding:"utf-8",
    highWaterMark:100,
})

readStream.on("data",(chunk)=>{
console.log(`${chunk.length}`);
console.log(`${chunk}`);


})


//~--------------- reading a file using readFieSync

let data = fs.readFileSync

