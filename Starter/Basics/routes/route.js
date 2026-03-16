//? 3 mandatory steps for routes files

 //1) import Router from express

import {Router} from "express";
import { displayFormPage, displayHomePage, submitForm } from "../controller/controller.js";

/*
//2 invoke router class/interface;
let router =Router();


//! endpoints/path will be defined between line 2 and 3
router.get("/",(req,res)=>{
    // res.end("hello world from express");
    res.send("data from send()")
})
*/

const router = Router();

router.get("/",displayHomePage)

router.get("/get-form", displayFormPage);

router.post("/register", submitForm);


//3 export
export default router;