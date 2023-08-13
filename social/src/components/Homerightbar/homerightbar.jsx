import "./homerightbar.css";
import {Users} from "../../dummydata";
import Online from "../online/Online.jsx";

export default function Homerightbar(){
    return(
        <>
            <div className="bdayConatiner">
                    <img src="../assests/gift-box-icon.jpg" className="bdayImg"></img>
                    <span className="bdayText"><b>Max</b> and <b>2 others</b> have birthday today</span>
                </div>

                <div className="adContainer">
                    <img src="https://picsum.photos/200" className="adImg"></img>
                </div>
                
                
                <div className="friendListcontainer">
                <h3 className="onlinebar">Online Friends</h3>
                <ul className="rightbarFriendlist">
                  {Users.map((u)=>(
                    <Online
                     key={u.id}
                     user={u} />
                  ))}
                </ul>
              </div>
           
        </>
    );
}