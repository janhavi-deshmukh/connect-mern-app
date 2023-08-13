
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <div className="navContainer">
            <div className="navLeft">
            <div className="logoContainer">
              <Link to="/" style={{textDecoration:"none",color:"white"}}>
              <span>connect</span>
              </Link>
                  
            </div>
            </div>
            <div className="navCenter">
                <div className="searchBox">
                 <SearchIcon className="searchicon"/>
                 <input type="text" className="searchInput" placeholder="Search friends,posts or videos"></input>
                </div>
            </div>
            <div className="navRight">
                <div className="navLinks">
                    <span className="nav-link">Home</span>
                    <span className="nav-link">Timeline</span>
                </div>
                <div className="navIcons">
                    <div className="naviconItem"><PersonIcon /><span className="number">1</span></div>
                    <div className="naviconItem"><MessageIcon/><span className="number">3</span></div>
                    <div className="naviconItem"><NotificationsIcon/><span className="number">4</span></div>
                    <div className="naviconItem"> <LightModeIcon/></div>
                   
                </div>
                <div className="profileIcon">
                    <img src="../assests/profilepic/img1.jpg" alt="icon"></img>
                </div>
                
            </div>
        </div>
    );
}

