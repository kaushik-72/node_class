import {createServer} from "node:http";
import fs from "node:fs";


createServer((req,res)=>{


// res.writeHead(200,{"content-type": "text/html"});
//? sending html content
// let htmlData =fs.readFileSync("./index.html","utf-8");
// res.end(htmlData);

// fs.readFile("./index.html","utf-8",(err,data)=>{
// if (err) return console.log("no file found");
// res.end(data);

//? sending css content
let cssData = fs.readFileSync("./style.css","utf-8");
res.end(cssData);

//? json response
res.writeHead(200,{"content-type": "application/json"});
let jsonResponse = 

})
.listen(9000, (err)=>{
    if(err)console.log("err");
    console.log("running");



});

//~ ssr: server side rendering (old) -> laravel
//~ csr: client side rendering (new) -> react

