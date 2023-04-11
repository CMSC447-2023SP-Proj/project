import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";


const Login = () => {

  const {login} = useContext(AuthContext)
  const handleLogin = () => {
    login();


  };
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                  <h1>Welcome to the DOG PARK</h1>
                  <p> Do you wanna join the newest social media platform,
                    Its sweeping the nation,
                    CODED BY UMBC STUDENTS, FOR UMBC STUDENTS,
                    Join today 
                  </p>
                    <span> Do you not have an account?</span>
                    <Link to="/register">
                    <button>Register Here</button>
                    </Link>
                </div>
                <div className="right">
                <h1>Login!</h1>
                 <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button onClick={handleLogin}>Login</button>
                 </form>
                 </div>
            </div>
        </div>

    );


};
export default Login
