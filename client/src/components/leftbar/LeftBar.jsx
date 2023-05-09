import "./leftBar.scss"
import Friends from "../../assets/friends.png";
import Groups from "../../assets/people.png";
import Watch from "../../assets/watching-a-movie.png";
import Memories from "../../assets/selfie.png";
import Settings from "../../assets/settings.png";
import Events from "../../assets/planner.png";
import Gallery from "../../assets/gallery.png";
import Video from "../../assets/video.png";
import Messages from "../../assets/letter.png";
import Dog from "../../assets/doglogo.png"
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LeftBar = () => {

   const { currentUser } = useContext(AuthContext);
    return(
        
        <div className="leftBar">
        <div className="container">
         <div className="menu">
         <div className="user">
         <img src={Dog} alt=""/>
                    <span>{currentUser.name}</span>

         </div>
         <div className="item">
            <img src={Friends} alt=""/>
            <span>Friends</span>
         </div>
         <div className="item">
            <img src={Groups} alt=""/>
            <span>Groups</span>
         </div>
         <div className="item">
            <img src={Watch} alt=""/>
            <span>Watch</span>
         </div>
         <div className="item">
            <img src={Memories} alt=""/>
            <span>Memories</span>
         </div>
         <div className="item">
            <Link to="/settings">
               <img src={Settings} alt="" />                   
            </Link>
            <span>Settings</span>
         </div>

         </div>
         <hr/>
         <div className="menu">
            <span>Your shortcuts
            </span>
            <div className="item">
            <img src={Events} alt=""/>
            <span>Events</span>
         </div>
         <div className="item">
            <img src={Gallery} alt=""/>
            <span>Gallery</span>
         </div>
         <div className="item">
            <img src={Video} alt=""/>
            <span>Videos</span>
         </div>
         <div className="item">
            <img src={Messages} alt=""/>
            <span>Messages</span>
         </div>
         
         </div>
         <hr/>
        </div>
        </div>
    )
}

export default LeftBar