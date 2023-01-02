const express=require("express");
const app=express();
app.get("/",(req,resp)=>{
    resp.sendFile("./public/file.html",{root:__dirname});})
app.listen(3000);
console.log("running on port number : 3000");