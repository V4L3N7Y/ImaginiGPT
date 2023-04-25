import React from "react";
import "../style/Login.css";
import { Auth, Provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigator = useNavigate();

  const signIn = () => {
    signInWithPopup(Auth, Provider)
      .then((res) => {
        console.log("sign in");
        navigator("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div class="authentication-text">
      <h1>Autentificare</h1>
      </div>
      <button onClick={signIn} class="button-17" role="button">
        Sign In With Google
      </button>
    </div>
  );
}

export default Login;
