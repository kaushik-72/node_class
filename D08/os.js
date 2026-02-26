import os from "node:os";
console.log(os);

console.log(os.totalmem()/(1024*1024*1024));
console.log(os.freemem()/(1024*1024*1024));

console.log(os.hostname());
console.log(os.arch());

//? cpus(), availableParllelism()-> number of cores in the system

console.log("cores: ", os.cpus().length);
console.log(os.availableParallelism());


