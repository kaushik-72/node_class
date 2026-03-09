// npm install express --save
//! --save was used to save it in prodiction 
//? we use this today -> npm install express

//* production dep are req to run the project not dev dependencies

// npm i nodemon -D

// anythng after -y, -D is a flag.

//? we have total 5 dependencies (prod/dev)

import express from "express";

let app = express();

app.listen(3000 , (err)=>{
if(err) throw err;
console.log("server running .....")
});




app.get("/json",(req,res)=>{
    // content-head
    res.json({success:true, message:"", data:{},error:{}});
})

app.get("/about",(req,res)=>{
    res.end("about page");
})


//? nodemon fileName.js

