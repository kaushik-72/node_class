//& http: hyper text transform protocol
//~ we can create server using this;

// import { log } from "node:console";
// import { get } from "node:http";

// fetch-> get
/**
 * send-> post
 * update-> patch,put
 * data-> delte()
 */
// import { log } from "node:console";
// import { log } from "node:console";
import http from "node:http";

console.log("http: ",http);

/**
 * 1)import http
 * 2) create a server usinf createServer()
 * 3)inside createServer, pass a callback function
 */

// let server = http.createServer((req,res)=>{
//     res.end("this from the server");
// });

// server.listen(9000, (err)=>{
//     if(err)console.log("problem occured while starting the server");
//     console.log("server started at port:9000");
    
// });

//~ -------------OR-------------

/*
http.createServer((req,res)=>{
    res.end("this from the server");
}).listen(9000, (err)=>{
    if(err)console.log("problem occured while starting the server");
    console.log("server started at port:9000");
    
});
*/
//? anything after ? is a query

http.createServer((req,res)=>{
    res.write("this from the write()")
    res.end();
}).listen(9000, (err)=>{
    if(err)console.log("problem occured while starting the server");
    console.log("server started at port:9000");
    
});






