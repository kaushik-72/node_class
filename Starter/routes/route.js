//? 3 mandatory steps for routes files

 //1) import Router from express

import {Router} from "express";
 
//2 invoke router class/interface;
let router =Router();

router.get("/",(req,res)=>{
    // res.end("hello world from express");
    res.send("data from send()")
})

//3 export
export default router;