import { Link, useNavigate } from "react-router-dom";
import "./settings.scss";
import { useState } from "react";
import axios from "axios";


const Register = () => {
    const warningFlair = (e) => {
        alert("Your account has been deleted");
        e.preventDefault();
        console.log('Your account has been deleted');
        }

    return(
        <div className="settings">
            <div className="card">
                <div className="right">
                <h1>Settings</h1>
                    <form>
                        <h3>Update Username</h3>
                    <input 
                      type="text" 
                      placeholder="New Username"
                      name="username"
                      //onChange={handleChange} 
                        />
                      <button>Update</button>

                    </form>
                    <form>
                        <h3>Change Password</h3>

                    <input 
                      type="password" 
                      placeholder="New Password"
                      name="password"
                      //onChange={handleChange} 
                        />
                        <button>Update</button>

                    </form>

                    <form>
                        <h3>Change Email</h3>

                        <input
                            type="email"
                            placeholder="New Email"
                            name="email"
                        //onChange={handleChange} 
                        />
                        <button>Update</button>

                    </form>

                    <form>
                        <h3>Update Major</h3>

                        <input
                            type="major"
                            placeholder="New Major"
                            name="major"
                        //onChange={handleChange} 
                        />
                        <button>Update</button>

                    </form>

                    <form>
                        <h3> Want to Delete your Account? </h3>
                        <warn>  **** This can not be reversed ****</warn>
                        <Link to="/login">

                        <button onClick={warningFlair}>Delete Account</button>
</Link>
                        </form>
              </div>
          </div>
        </div>
    );
}
export default Register;
