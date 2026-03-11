import express from "express";

let app = express();

//~ routing
app.get("/",(req,res)=>{
res.send("data from send")
})

app.get("/about",(req,res)=>{
res.send("about data")
})

app.listen(3000,(err)=>{
if(err) throw err;
console.log("Server running");
})
