import {createServer} from "node:http";

createServer((req,res)=>{

    res.writeHead(200,{"content-type":"text/plain"});
    res.end("this is string!!")
}).listen(9000, (err)=>{
    if(err)console.log("err");
    console.log("running");
    
});