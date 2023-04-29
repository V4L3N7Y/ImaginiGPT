import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const [user] = useAuthState(Auth);
  const navigator = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const logOut = async () => {
    await signOut(Auth);
    navigator("/");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  return (
    <div>
      <div class="header">
        <a href="/" class="logo">
          Imagini<span>GPT</span>
        </a>
 
         
         

        <div className='header-right'>
          <div>
          <MdDarkMode onClick={toggleTheme} className="darkmode-icon" />
          </div>

          
          {user ? (
            <div className="user-logged">
              <img
                src={user.photoURL}
                className="user-photo"
                alt="User Profile Picture"
              />
              <span className="user-name">{user.displayName}</span>
              <FiLogOut className="logout" onClick={logOut} />
              </div>
          ) : (
            <div>
            <Link className="gap" to={"/login"}>
              Login
            </Link>
            </div>
          )}
          {user && (
            <div>
            <Link className="gap" to={"/generate"}>
              Generate
            </Link>
            </div>
          )}
          <div>
          <Link className="gap" to={"/home"}>
            Home
          </Link>
          </div>
          <div>
          <Link className="active" to={"/about"}>
            About
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
