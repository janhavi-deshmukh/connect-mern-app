import "./closefriend.css";


export default function Closefriend(props){
   
    return (
        <li className="sidebarFriend">
        <img src={props.closeuser.profilePicture} alt="friendimg" className="sidebarFriendImg"></img>
        <span className="sidebarFriendName">{props.closeuser.username}</span>
        </li>
    );
}