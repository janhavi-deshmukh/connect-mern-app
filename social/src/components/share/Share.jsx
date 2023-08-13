import "./Share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="../assests/profilepic/img1.jpg" className="shareprofileImg"></img>
                    <input type="text" className="shareText" placeholder="Share your thoughts"></input>
                
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareoption">
                            <PermMediaIcon htmlColor="red"/>
                            <span className="shareoptionText">Photos or videos</span>
                        </div>

                        <div className="shareoption">
                            <LabelIcon htmlColor="blue"/>
                            <span className="shareoptionText">Tag</span>
                        </div>

                        <div className="shareoption">
                            <LocationOnIcon htmlColor="green"/>
                            <span className="shareoptionText">Location</span>
                        </div>

                        <div className="shareoption">
                            <EmojiEmotionsIcon htmlColor="goldenrod"/>
                            <span className="shareoptionText">Mood</span>
                        </div>
                        <div className="shareoption">
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}