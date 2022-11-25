const { request } = require('express');
const exp=require('express');
const customerApp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
//importing bycrpt
const bcryptjs=require('bcryptjs');
customerApp.use(exp.json());
//import java web token
const jwt = require("jsonwebtoken");



//get all products
customerApp.get('/getcustomers',expressAsyncHandler(async(request,response)=>{
    //get product collection object
    let customersCollectionObject=request.app.get("customersCollectionObject");
    //read all products
    let customers=await customersCollectionObject.find().toArray()
    //send response
    response.send({message:"all customers",payload:customers})

}));

// get products by username
customerApp.get('/getcustomers/username',expressAsyncHandler(async(request,response)=>{
    //get productcollection object
    let customersCollectionObject=request.app.get("customersCollectionObject");
    //get product from url param
    let cname=(+request.params.username);
    //get product by id
    let customers=await customersCollectionObject.findOne({username:cname});
    //if product doesn't exist
    if(customers==null){
        response.send({message:"customer not existed"})
    }
    else{
        response.send({message:'customer existed',payload:customers})
    }

}))

//create route to user login
customerApp.post("/login",expressAsyncHandler(async(request,response)=>{
    //get usercollection object
    let customersCollectionObject=request.app.get("customersCollectionObject");
    //get userobj from client
    let userCredObj=request.body
    //search user by username
    let userofDB=await customersCollectionObject.findOne({username:userCredObj.username});
    //username not found
    if(userofDB==null){
        response.send({message:"invalid user"})
    }
    else{
        let status=await bcryptjs.compare(userCredObj.password,userofDB.password);
        if(status==false){
            response.send({messsage:"Invalid password"})
        }
        else{
            let token=jwt.sign({username:userofDB.username},'abcdef',{expiresIn:60})

            response.send({message:"login success",payload:token,userObj:userofDB})
        }
    }
 
}));

//create route to create-user
customerApp.post('/create-user',expressAsyncHandler(async(request,response)=>{
    //get usercollection object
    let customersCollectionObject=request.app.get("customersCollectionObject");
    //get userobj from client
    let newUserObj=request.body;
    //search user by username
    let userofDB=await customersCollectionObject.findOne({username:newUserObj.username})

    if(userofDB!==null){
        response.send({message:"Username has already taken.Please use another"})
    }

    //if user is existed
    else{
        //hash password
        let hashedPassword=await bcryptjs.hash(newUserObj.password,6)

        //replace plain password with hashed password
        newUserObj.password=hashedPassword;

        //insert new user
        await customersCollectionObject.insertOne(newUserObj)
        //send response

        response.send({message:"new customer created"})
    }
}))

//create route to update-user
customerApp.put('/update-user',async(request,response)=>{
     //get usercollection object
     let customersCollectionObject=request.app.get("customersCollectionObject");
     //get cutomers array
     let customers=await customersCollectionObject.find().toArray()
    //get userobj sent by client
    let modifiedObj=request.body;
    console.log(modifiedObj);
    let flag=0
    for(const obj of customers){
        if(obj.username==modifiedObj.username){
            // let hashedPassword=await bcryptjs.hash(modifiedObj.password,6)
            // obj.password=hashedPassword;
            obj.email=modifiedObj.email;
            console.log(obj);
            flag=1;
            break;
        }
    }
    if( flag==1){
        response.send({message:"User updated"})
    }
    else{
        response.send({message:"User not found"})
    }

});

//create route to delete user

customerApp.delete('/remove-user/username',async(request,response)=>{
    console.log("hdhedhd");
    //get url param
    // let userName=(+request.params.username);
    //get usercollection object
    // let customersCollectionObject=request.app.get("customersCollectionObject");
    // //get cutomers array
    // let userObj=await customersCollectionObject.findOne({username:userName})
    // // let userObj=customers.find({username:userName})
    // console.log(userObj);
    // if(userObj==undefined){
    //     response.send({message:"users not existed"})
    // }
    // else{
    //     console.log(userObj)
    //     let userObj=request.body;
    //     customers.pop(userObj)
    //     response.send({message:"user deleted"})
    // }
});

console.log('Client-side code running');

const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  console.log('button was clicked');

  fetch('/homepage', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});


module.exports=customerApp;