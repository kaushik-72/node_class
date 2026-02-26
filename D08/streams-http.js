import { readFileSync } from "node:fs";
import {createServer} from "node:http";

createServer((req,res)=>{
if(req.url === "/slow"){
    setTimeout(()=>{
        fs.readFileSync("","utf-8");
        res.end("file read");

    }, 3000);

}
else if(req.url==="/fast"){
    setTimeout(()=>{
        fs.readFileSync("","utf-8");
        res.end("file read");

    }, 3000);
}
else{
    res.end("please end a valid endpoint -> /slow or /fast");
    }
}).listen(9000,(err)=>{
    if(err)console.log((err));
    console.log("server running");
    
    
})