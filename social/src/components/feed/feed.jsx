import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import {useState,useEffect} from "react";
import axios from "axios";

export default function Feed({username}){
    
    const [posts,setPosts]=useState([]);

    useEffect(()=>{

        const fetchPosts=async ()=>{
            try{
                const newLocal = "posts/timeline/64b010d38c086675156cb2dc";
                const profileFeed="/posts/profile/";
                const res= username
                ?await axios.get(profileFeed+username)
                :await axios.get(newLocal);
                setPosts(res.data);
                console.log(res.data);
            }catch(err){
                console.log(err);
            }
            
        }; 
        fetchPosts();
      
    },[username])

    return (
       
        <div className="feedContainer">
            <div className="feedWrapper">
                <Share/>
                 {posts.map((post)=>{
                    return <Post 
                    key={post._id} 
                    post={post}
                     />
                })} 
                
            </div>
        </div>
    );
}