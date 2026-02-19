//? streams use buffer internally

import { log } from "node:console";

//? 1? readable stream
//? 2) writeable stream
//? 3) dupex stream
//? 4) transform stream

// import buffer from "node:buffer";

//  Buffer.from("hello");

let buff1 = Buffer.from("ab");
console.log("buff1 ", buff1);
console.log(buff1.toJSON());



