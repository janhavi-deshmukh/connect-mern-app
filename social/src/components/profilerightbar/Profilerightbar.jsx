import { Hidden } from "@mui/material";
import "./Profilerightbar.css";

export default function Profilerightbar({user}){
    return(
        <div className="profileright">
            <div className="userInfo">
                <h3 className="title">User Information</h3>
                <div className="infoContainer">

                <div className="infoItem">
                  <span className="infoKey">City:</span>
                  <span className="infoValue"> Mumbai</span>
                </div>

                <div className="infoItem">
                <span className="infoKey">Followings:</span>
                <span className="infoValue">{user.followings}</span>
                </div>

                <div className="infoItem">
                <span className="infoKey">Followers:</span>
                <span className="infoValue">{user.followers}</span>
                </div>
                    
                    
                    
                </div>
            </div>
             
            <h3 className="friendTitle">User Followings</h3>
            <div className="Userfollowings">
                <div className="friendInfobar">
                    <img className="followingImg" src="../assests/profilepic/img1.jpg"></img>
                    <span className="followingName">me</span>
                </div>

                <div className="friendInfobar">
                    <img className="followingImg" src="../assests/profilepic/img1.jpg"></img>
                    <span className="followingName">me</span>
                </div>

                <div className="friendInfobar">
                    <img className="followingImg" src="../assests/profilepic/img1.jpg"></img>
                    <span className="followingName">me</span>
                </div>

                <div className="friendInfobar">
                    <img className="followingImg" src="../assests/profilepic/img1.jpg"></img>
                    <span className="followingName">me</span>
                </div>

                <div className="friendInfobar">
                    <img className="followingImg" src="../assests/profilepic/img1.jpg"></img>
                    <span className="followingName">me</span>
                </div>

               
            </div>
        </div>
    );
}