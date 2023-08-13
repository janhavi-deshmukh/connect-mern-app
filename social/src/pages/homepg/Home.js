import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";
import "./Home.css";

export default function Home(){
    return (
        <div>
        <Navbar/>
        <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar />
        </div>
        
        </div>
        
    );
}