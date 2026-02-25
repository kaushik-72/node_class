//1. before installing 3rd party app the foldermust have package.json file

//~ npm init -y
// change type: common js to module

//2. npm i/install modulename
//   npm i/install modulename1 mN2 mN3
//~  npm i mongodb

//3. node_modules stores the source code of all the installed third party packages

//! connecting mongodb

// import mongodb from "mongodb";



// console.log("mongodb: ", mongodb.MongoClient);

//~ create connection, db , collection
//~ insert/delete/update/fetch data

import { MongoClient } from "mongodb";  // this is class based on naming convention

async function  connectDB(){
let client = await MongoClient.connect("mongodb://localhost:27017");
console.log("Databse Connected");


let database = client.db("NodeDB");
console.log("database created");

// let collection = await database.createCollection("nodeUsers");
// console.log("collection-created");

let collection = await database.collection("col2");
console.log("col2 created");

//& ===========
//! insert one
// let res = await collection.insertOne({
//     name:"abc",age:34});
//     console.log("res: ", res);
//     console.log("doc added");  

//! insert many
let res2 = await collection.insertMany([
    {name:"def",age:37},
    {name:"ghi",age:31}]
);

    console.log("res: ", res2);
    console.log("doc added"); 
}

connectDB();

// deep copy - shallow copy - lodash



