import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './navelements';
const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/home' activeStyle>
              Home
            </NavLink>
            <NavLink to='/profile' activeStyle>
              Profile
            </NavLink>
            <NavLink to='/myorders' activeStyle>
              Myorders
            </NavLink>
            <NavLink to='/signup' activeStyle>
              Sign Up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;
