import fs from "node:fs";
import path from "node:path";
export const displayHomePage = (req,res) =>{
    res.end("<h1>this is home page</h1>")
}

//* above is es-module export 

//* below is commonjs export
/*
const displayHomePage = (req,res) =>{
    res.end("<h1>this is home page</h1>")
};

module.exports = {
    displayHomePage,
}
*/

export const displayFormPage = (req,res) =>{
    let filePath = path.join(import.meta.dirname, "..","pages","index.", "html");
    let fileData = fs.createReadStream(filePath,"utf-8");
    fileData.pipe(res);   
};

export const submitForm = (req,res)=>{
    console.log("req.body",req.body);
let {userEmail,userPassword} = req.body;

res.status(201).json({
    success:true,
    message:"user registered successfully",
    data:{userEmail,userPassword},
});
}

displayFormPage();

