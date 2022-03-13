import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    // some fancy firebase login
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        // it successfully logged-in user with credentials
        navigate("/");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();

    // do some fancy firebase register
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        // it successfully created user with credentials
        console.log("user created:", credentials);
        if (credentials) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="/images/amazon-logo-b.png" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form className="login__form" action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
          <p>
            By signing-in you agree to Amazon Clone Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads.
          </p>
          <button onClick={register} className="login_registerButton">
            Create your Amazon Clone account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
