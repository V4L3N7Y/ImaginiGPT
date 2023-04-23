import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { Auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user] = useAuthState(Auth);
  const navigator = useNavigate();

  const logOut = async () => {
    await signOut(Auth);
    navigator("/");
  };

  return (
    <div>
      <div class="header">
        <a href="/" class="logo">
          Imagini<span>GPT</span>
        </a>
        <div className="header-right">
          <MdDarkMode className="darkmode-icon" />

          {user ? (
            <>
              <img
                src={user.photoURL}
                className="user-photo"
                alt="User Profile Picture"
              />
              <span className="user-name">{user.displayName}</span>
              <FiLogOut className="logout" onClick={logOut} />
            </>
          ) : (
            <Link className="gap" to={"/login"}>
              Login
            </Link>
          )}
          {user && (
            <Link className="gap" to={"/generate"}>
              Generate
            </Link>
          )}
          <Link className="gap" to={"/home"}>
            Home
          </Link>
          <Link className="active" to={"/about"}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
