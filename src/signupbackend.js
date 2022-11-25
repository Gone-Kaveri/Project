const express=require("express");   //importing express
const signupbackend=express();      //intializing express

signupbackend.listen(5000,()=>{
    console.log("server started");
})