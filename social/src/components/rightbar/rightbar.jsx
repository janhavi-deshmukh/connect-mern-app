import "./rightbar.css";
import Profilerightbar from "../profilerightbar/Profilerightbar";
import Homerightbar from "../Homerightbar/homerightbar";

export default function Rightbar({user}){
   
    return (   
        <div className="rightbarContainer">
            <div className="rightbarWrapper">
           
            {user ? <Profilerightbar user/> :  <Homerightbar/>}
            
             </div>
        </div>
    );
}