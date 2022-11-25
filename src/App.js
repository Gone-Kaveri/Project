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

