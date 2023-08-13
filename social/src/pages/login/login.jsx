import "./login.css";
import { useRef,useContext } from "react";
import { loginCalls } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@mui/material";


export default function Login(){

    const email=useRef();
    const password=useRef();
    const {user,isFetching,error,dispatch}=useContext(AuthContext);

    const handleClick=(e)=>{
        e.preventDefault();
       loginCalls({email:email.current.value,password:password.current.value},dispatch);
    }

    console.log(user);
    return (
        <>

        <div className="loginPage">
        <div className="logoContainer">
            <div className="logoTop">
             <img src="./assests/connectlogo.png" className="logo"></img>connect</div>
            <div className="logoText">CONNECT.SHARE.INSPIRE</div>
        </div>

        <div className="loginConatiner">
            <form className="loginBox" onSubmit={handleClick} >
            
               <input className="userinfo" type="email" placeholder="Email" required ref={email}></input>
                <input className="userinfo" type="password" placeholder="Password" required minLength="6" ref={password}></input>
                <button className="loginBtn" disabled={isFetching}>{isFetching ? <CircularProgress color="inherit"/>:"Login"}</button>
                <span className="textmsg" >Don't have an account?/Forgot Password?</span>
                <button className="registerBtn">{isFetching ? <CircularProgress color="inherit"/>:"Create new Account"}</button>
            </form>
        </div>
        </div>
        

        </>
        
    );
}