import "./Online.css"
export default function Online(props){

    return(

        <li className="rightbarFriendlisitem">
                    <div className="imgOnline">
                     <img src={props.user.profilePicture} className="onlineImg"></img>
                     <div className="onlinelogo" ></div>
                      </div>
                     <span className="onlineName">{props.user.username}</span>
                 </li> 
    );
}