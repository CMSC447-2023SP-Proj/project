import Post from "../post/Post";
import "./posts.scss"



const Posts = () => {
    //Temporary dummy data
    const posts = [
      {
        id: 1,
        name: "Flint Marko",
        userId: 1,
        profilePic:
          "https://images.pexels.com/photos/6141908/pexels-photo-6141908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Just chilling like villain on the beach, Having this much fun should be a crime ",
        img: "https://images.pexels.com/photos/1151282/pexels-photo-1151282.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        id: 2,
        name: "Eobard Thawne",
        userId: 1,
        profilePic:
          "https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "It was me BARRY !",
      },
    ];
  
    return (
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  };
  export default Posts;
  