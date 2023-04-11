import { Link } from "react-router-dom";
import "./register.scss";


const Register = () => {
    return(
        <div className="register">
            <div className="card">
                <div className="left">
                  <h1>Join the Family !</h1>
                  <p> Do you wanna join the newest social media platform,
                    Its sweeping the nation,
                    CODED BY UMBC STUDENTS, FOR UMBC STUDENTS,
                    Join today 
                  </p>
                    <span> Do you have an account?</span>
                   <Link to="/login">
                    <button>Login</button>
                    </Link>
                    
                </div>
                <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Name" />
                    <button>Register</button>
                </form>
                </div>
            </div>
        </div>

    );


};
export default Register;
