import "./rightBar.scss"


const RightBar = () => {
    return(
        <div className="rightbar">
        <div className="container">
            <div className="item">
                <span> Suggestions for you</span>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/14872117/pexels-photo-14872117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <span> Din Djarin</span>
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
                        <p>
                        <span> Din Djarin</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/14872117/pexels-photo-14872117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p>
                        <span> Din Djarin</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
                </div>
                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/14872117/pexels-photo-14872117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <p>
                        <span> Din Djarin</span> changed their cover picture
                        </p>
                    </div>
                    <span>1 min ago</span>
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
                        <img src="https://images.pexels.com/photos/14872117/pexels-photo-14872117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="online" />
                        <span> Din Djarin</span> 
                        
                    </div>
                    
                </div>                <div className="user">
                    <div className="userInfo">
                        <img src="https://images.pexels.com/photos/14872117/pexels-photo-14872117.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="online" />
                        <span> Din Djarin</span> 
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
        </div>
    )
}

export default RightBar