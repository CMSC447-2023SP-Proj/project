import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateUserContext } from "../../context/settingsContext";
import "./settings.scss";

const Settings = () => {
    const [inputs, setInputs] = useState({
        newUsername: "",
    });
    const [err, setErr] = useState(null);

    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(inputs);
    };
    const { updateUsername } = useContext(updateUserContext);

    const handleUserUpdate = async (e) => {
        e.preventDefault();
        try {
            await UpdateUser(inputs);
            navigate("/")
        } catch (err) {
            setErr(err.response.data);
        }
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Settings</h1>
                    <p>
                        bbbooboooedfjsfj,
                        alias bazinga numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="left">
                    <h1>Settings</h1>
                    <p>
                        bbbooboooedfjsfj,
                        alias bazinga numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input
                            type="text"
                            placeholder="New Username"
                            name="username"
                            onChange={handleChange}
                        />
                        {err && err}
                        <button onClick={handleUserUpdate}>Update Username</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Settings;