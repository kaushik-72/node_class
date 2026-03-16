// npm install express --save
//! --save was used to save it in prodiction 
//? we use this today -> npm install express

//* production dep are req to run the project not dev dependencies

// npm i nodemon -D

// anythng after -y, -D is a flag.

//? we have total 5 dependencies (prod/dev)
//& when a data is created first time we use POST method
//* form has a default value of get set it to POST in htmlfile
//* base url/param1/param2/....?-< param end after this is query.
//* express is a minimal routing framework
//? npm update nodemon

import express from "express";
import fs, { createReadStream } from "node:fs"
import routesFile from "./routes/route.js"

let app = express();

app.use(routesFile); //& global/app middleware

app.use(express.urlencoded({extended:true})); //todo

app.get("/api/v1",routesFile);

app.listen(3000 , (err)=>{
if(err) throw err;
console.log("server running .....")
});






// app.get("/json",(req,res)=>{
//     // content-head
//     res.json({success:true, message:"", data:{},error:{}});
// })

// app.get("/about",(req,res)=>{
//     res.end("about page");
// })


//? nodemon fileName.js

app.get("/form",()=>{
    let readStream = fs.createReadStream(
        path.join(import.meta.dirname,"pages","form.html")
    )
})

//thunder client : vscode / no net req/ paid/ more req; delte old req
// postman: chrome / requires net / unlimited endpoint can be created

//? create a function to get all the users


if (req.method ==="GET"){
    if (req.url === "/"){
        res.end("this is homepage");
    }
}

else if(req.url ==="/form"){
    res.writeHead(200,{"content-type": "text/html"});
    createReadStream("./form.html","utf-8").pipe(res);
}

else {
    res.writeHead(400,{"content-type": "text/plain"});
    res.end("page not found");
}

//? make a feedback form / handle errors / connect with db

