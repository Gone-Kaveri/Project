import React from "react";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";
// import { Navbar, Nav } from 'rsuite';
const Navbar = () => {
    return (
            <div style={{display:"flex",justifyContent:"space-around",background:"dodgerblue",height:"50px",fontSize:"large",alignContent:"center", color:"black"}}>
                    <div><Link to="/" style={{color:"black",textDecoration:"none"}}>Home</Link></div>
                    <div><Link to="/profile" style={{color:"black",textDecoration:"none"}}>Profile</Link></div> 
                    <div><Link to="/myorders" style={{color:"black",textDecoration:"none"}}>My Orders</Link></div>
                    <div><Link to="/login" style={{color:"black",textDecoration:"none"}}>Login</Link></div>
                    <div><Link to="/signup" style={{color:"black",textDecoration:"none"}}>Signup</Link></div>
            </div >
    
    );
};

export default Navbar;
