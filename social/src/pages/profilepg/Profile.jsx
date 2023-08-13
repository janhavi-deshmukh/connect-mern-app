import React from "react";
import "./Profile.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import {useState,useEffect} from "react";
import axios from "axios";

export default function Profile(){
    
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const [user,setUser]=useState({});
    
  useEffect(()=>{

    const fetchUser=async ()=>{
        try{
            
            const res= await axios.get(`/user?username=shyam`);
            setUser(res.data);
            
           
        }catch(err){
            console.log(err);
        }
        
    }; 
    fetchUser();
},[])

    return(
        <div>
        <Navbar/>
        <div className="profileContainer">
        <Sidebar />
        <div className="profileRight">
            <div className="profilerightTop">
                <div className="profileCover">
                    <img className="profileCoverimg" src={user.coverPicture || PF+"assests/no-cover.jpg"}></img>
                    <img className="profileUserimg" src={user.profilePicture || PF+"assests/no-avatar.png"}></img>
                </div>

                <div className="profileInfo">
                    <h4 className="nameUser">{user.username}</h4>
                    <span className="userBio">{user.bio}</span>
                </div>
            </div>
            <div className="profilerightBottom">
            <Feed username="shyam"/>
            <Rightbar user={user}/>
            </div>
           
        </div>
        
        </div>
        
        </div>
    );
}