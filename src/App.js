import React from 'react'
import './App.css';
import Navbar from './containers/navbar';  //exported from navpage
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./containers/login"
import SignUp from "./containers/signup"
import Profile from './containers/profile';
import HomePage from './containers/homepage';
import NavPage from "./containers/navpage"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact component={HomePage} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/signup' component={SignUp} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
