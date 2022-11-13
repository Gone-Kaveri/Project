import './App.css';
import Navbar from './containers/navbar';  //exported from navpage
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./containers/login"
import SignUp from "./containers/signup"
import Profile from './containers/profile';
import Home from './containers/homepage';
import MyOrders from './containers/myorder';

//db url
import nba from "nba/dist/nba"
const DBUrl="mongodb+srv://onlinestore.xgz61ga.mongodb.net/store"
const userName="onlineStoreDB"
const password="onlineStoreDB123"
//mongodb
const exp=require("express")
const app=exp()

const mclient=require("mongodb").MongoClient;
//connect with mongoDB server
mclient.connect(DBUrl) 
.then((client)=>{
  // get DB object
  let dbobj=client.db("store")

  //create collection objects
  let customersCollectionObj=dbobj.collection("customers");
  let ordersCollectionObj=dbobj.collection("customersOrders");

  //sharing collection objects to APIS
  app.set("customersCollectionobj",customersCollectionObj);
  app.set("ordersCollectionObj",ordersCollectionObj);

  console.log("DB connection successful")
})
.catch(err=>console.log("error in db connection:",err));

function App() {
  return (
     <BrowserRouter>
      <div>
     <Navbar/>
     
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
      </div>
     </BrowserRouter>
    
  );
}

export default App;
