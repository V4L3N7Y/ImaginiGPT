import React from 'react'
import '../style/menu.css'
import { Auth } from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

function Menu() {

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

  return (
    <div>
        <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
            <li><a class="menu__item" href="home">Home</a></li>
			<li><a class="menu__item" href="about">About</a></li>
			<li><a class="menu__item" href="generate">Generate</a></li>
			

            
          
          {user ? (
            <>
              <img
                src={user.photoURL}
                className="user-photo"
                alt="User Profile Picture"
              />
              <span className="user-name">{user.displayName}</span>
              <li><a class="menu__item" onClick={logOut}>Logout</a></li>
              </>
          ) : (
            
            <li><a class="menu__item" href="login">Login</a></li>
           
          )}
			
    </ul>
  </div>
    </div>
  )
}

export default Menu