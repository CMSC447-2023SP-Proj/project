import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from "../../components/posts/Posts";




const Profile = () =>{
 return(
    <div className="profile">
      <div className="images">
         <img src="https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover" />
         <img src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
         <div className="uInfo">
            <div className="left">
               <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="small" />
               </a>
               <a href="http://instagram.com">
                  <InstagramIcon fontSize="small" />
               </a>
               <a href="http://twitter.com">
                  <TwitterIcon fontSize="small" />
               </a>
               <a href="http://linkedin.com">
                  <LinkedInIcon fontSize="small" />
               </a>
               <a href="http://pinterest.com">
                  <PinterestIcon fontSize="small" />
               </a>
            </div>
            <div className="center">
               <span>Matt Parsons</span>
               <div className="info">
                  <div className="item">
                     <PlaceIcon fontSize="small"/>
                     <span>UMBC</span>
                  </div>
                  <div className="item">
                     <LanguageIcon fontSize="small"/>
                     <span>dogpark.dev</span>
                  </div>
                  </div>
                 
                  <button>Follow</button>
                 
                 
               
            </div>
            <div className="right">
               <EmailOutlinedIcon/>
               <MoreVertOutlinedIcon/>
            </div>
         </div>
     
      <Posts/>
      </div>
    </div>
 )




}
export default Profile