import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import MovieIcon from '@mui/icons-material/Movie';
import EventIcon from '@mui/icons-material/Event';
import {Users} from "../../dummydata";
import Closefriend from "../closefriend/closefriend";


export default function Sidebar(){
    return (
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListitem">
                     <RssFeedIcon/>
                     <span className="listItemtext">Feed</span>
                    </li>

                    <li className="sidebarListitem">
                     <ChatIcon/>
                     <span className="listItemtext">Chats</span>
                    </li>

                    <li className="sidebarListitem">
                     <GroupsIcon/>
                     <span className="listItemtext">Groups</span>
                    </li>

                    <li className="sidebarListitem">
                     <MovieIcon/>
                     <span className="listItemtext">Watch</span>
                    </li>
                    
                    <li className="sidebarListitem">
                     <EventIcon/>
                     <span className="listItemtext">Calendar</span>
                    </li>

                    <button className="sidebarButton">Show More</button>
                </ul>

                
                <ul className="sidebarFriendList">
                   {Users.map((u)=>{
                    return <Closefriend key={u.id} closeuser={u}/>
                   })}
                </ul>
            </div>

        </div>
    );
}