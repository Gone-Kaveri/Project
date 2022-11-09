import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./containers/login"
import SignUp from "./containers/signup"
import Homepage from "./containers/homepage"
function App() {
  return (
    
        <div>
        <Login/>
        </div>
    
  )
}

export default App

