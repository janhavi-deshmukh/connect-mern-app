import React, { useContext } from "react";
import Home from "./pages/homepg/Home.js";
import Profile from "./pages/profilepg/Profile.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import {
    BrowserRouter as Router,
    Routes,
    Route,   
  } from "react-router-dom";
import { AuthContext } from "./context/AuthContext.js";


function App(){

    // const {user}=useContext(AuthContext);
   
    return (
      
        <>
          <Router>
             <Routes>
                <Route exact path="/" element={ <Home/>}/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/register" element={ <Register/> }/>
                <Route path="/profile/:username" element={ <Profile/>}/>

             </Routes>
        </Router>

           
        </>
        
       
    );
}

export default App;