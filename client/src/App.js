import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Login from "./pages/log/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftbar/LeftBar";
import RightBar from "./components/rightbar/Rightbar";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
function App() {
  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext)
 console.log(darkMode)
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:5}}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  const ProtectedRoute =({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:  (<ProtectedRoute>
        <Layout />
      </ProtectedRoute>
  
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

