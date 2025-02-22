import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"


const Stories = () =>{
    const {currentUser} = useContext(AuthContext)

    //Temporary dummy data
     const stories = [
        { id:1,
          name: "Chip",
          img:"https://pbs.twimg.com/profile_images/1190390882408763392/uBKRk2Bv_400x400.jpg"

        },
        { id:2,
            name: "Pupper Lang",
            img:"https://images.pexels.com/photos/5122188/pexels-photo-5122188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

          },
          { id:3 ,
            name: "Apollo Breed",
            img:"https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg"

          },

     ];

    return(
        <div className="stories">
             <div className="story">
                <img src="https://gritstarter.umbc.edu/s/1325/images/editor/crowdfunding/img_0759__1_.JPG" alt="" />
                <span className="storyText">{currentUser.name}</span>
                <button>+</button>
                </div> 
            {stories.map(story=>(
               <div className="story" key={story.id}>
                <img src={story.img} alt="" />
                <span className="storyText">{story.name}</span>

                </div> 
            ))}

            </div>
    )
 

}
export default Stories