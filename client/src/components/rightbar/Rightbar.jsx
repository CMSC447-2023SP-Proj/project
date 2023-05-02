import "./rightBar.scss"


const RightBar = () => {
    return(
        <div className="rightbar">
        <div className="container">
            <div className="item">
                <span> Suggestions for you</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://static.displate.com/857x1200/displate/2021-05-13/1cb7b81deeb4b42fb30b87fc952583f5_1010aed36358aaabcddc9406dede20c4.jpg" alt="" />
                        <span> William Mitchell</span>
                    </div>
                    <div className="buttons">
                        <button>Follow</button>
                        <button>Dismiss</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <span>Latest Activity</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/14872117/pexels-photo-14872117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="online" />
                        <p>
                        <span> Din Djarin</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://i.ebayimg.com/images/g/8SUAAOSwGoRiGm~5/s-l500.png" alt="" />
                        <div className="busy" />
                        <p>
                        <span> Edward Robinson</span> posted a story
                        </p>
                    </div>
                    <span>34 mins ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/pi_icon_ngvbby.jpg" alt="" />
                        <div className="online" />
                        <p>
                        <span> Jamie Cooper</span> Posted a study group
                        </p>
                    </div>
                    <span>7 mins ago</span>
                </div>
                
            </div>
            <div className="item">
                <span>Online Friends </span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/14872117/pexels-photo-14872117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="online" />
                        <span> Din Djarin</span> 
                        
                    </div>
                    
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_70,c_pad,w_1200,h_630,f_auto/pi_icon_ngvbby.jpg" alt="" />
                        <div className="online" />
                        <span> Jamie Cooper</span> 
                        
                    </div>
                    
                </div>                <div className="user">

                    
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default RightBar