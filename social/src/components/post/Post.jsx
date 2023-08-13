import "./Post.css"
import { useState ,useEffect} from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from "axios";
import {format} from "timeago.js";
import {Link} from "react-router-dom";


export default function Post(props){
    
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  const [like,setLike]=useState(props.post.likes.length);
  const [isliked,setisLike]=useState(false);
  const [user,setUser]=useState({});

  useEffect(()=>{

    const fetchUser=async ()=>{
        try{
            
            const res= await axios.get(`/user?userId=${props.post.userId}`);
            setUser(res.data);
            
           
        }catch(err){
            console.log(err);
        }
        
    }; 
    fetchUser();
},[props.post.userId])

  const handler=()=>{
    setLike(isliked? like-1:like+1)
    setisLike(!isliked)
  }
    
    return (
       
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                  <div className="postTopLeft">
                  <Link to={`profile/${user.username}`}>
                  <img src={user.profilePicture || "../assests/no-avatar.png"} className="postProfileimg"></img>
                  </Link>
                    
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(props.post.createdAt)}</span>
                  </div>

                  <div className="postTopRight">
                   <MoreVertIcon/>
                  </div>
                </div>
                
                <div className="postCenter">
                 <span className="postCaption">{props.post?.caption}</span>
                 <img src={PF+props.post.img} className="postImg"></img>
                </div>
                 <div className="postBottom">
                  <div className="postBottomLeft">
                    <div className="icons" onClick={handler}>
                    <ThumbUpIcon  htmlColor="#1E90FF" className="i1"/>
                    <FavoriteIcon  htmlColor="#B22222" className="i1"/>
                    </div>
                    
                    <span className="likenumber">{like} people like it</span>
                  </div>
                  <div className="postBottomRight">{props.post.comment} comments</div>
                </div> 
            </div>
        </div>
    );
}