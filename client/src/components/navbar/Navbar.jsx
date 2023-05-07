import "./navbar.scss"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NightsStayTwoToneIcon from '@mui/icons-material/NightsStayTwoTone';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Dog from "../../assets/doglogo.png"
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


const Navbar = () => {
    const { toggle, darkMode } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                </Link>
                <span>DOG PARK</span>
                <HomeRoundedIcon/>
                {darkMode ? ( <WbSunnyOutlinedIcon onClick={toggle} />
                ):(<NightsStayTwoToneIcon onClick={toggle}/>)
    }            


                <MoreVertIcon/>
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="right">
                <PersonRoundedIcon/>
                <EmailRoundedIcon/>
                <NotificationImportantRoundedIcon/>
                <div className="user">
                    <img src={Dog} alt=""/>
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar