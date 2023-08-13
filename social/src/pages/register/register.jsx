import "./register.css";

export default function Register(){
    return (
        <>

        <div className="registerPage">
        <div className="logoContainer">
            <div className="logoTop">
             <img src="./assests/connectlogo.png" className="logo"></img>connect</div>
            <div className="logoText">CONNECT.SHARE.INSPIRE</div>
        </div>

        <div className="registerConatiner">
            <div className="registerBox">
            
               <input className="userinfo" type="email" placeholder="Email"></input>
                <input className="userinfo" type="password" placeholder="Password"></input>
                <input className="userinfo" type="password" placeholder="Confirm Password"></input>
                <button className="loginBtn">Sign up</button>
                <span className="textmsg" >Already have an account?</span>
                <button className="registerBtn">Login </button>
            </div>
        </div>
        </div>
        

        </>
        
    );
}