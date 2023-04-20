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
         <img src="data:image/png;base64,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" alt="" className="profilePic" />
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
               <span>Yoshi</span>
               <div className="info">
                  <div className="item">
                     <PlaceIcon fontSize="small"/>
                     <span>Mushroom Kingdom</span>
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