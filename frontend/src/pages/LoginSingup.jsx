import React from "react";
import "./CSS/LoginSingup.css";
import { Link } from "react-router-dom";

const LoginSingup = () => {
  return (
    <div className="loginsingup">
      <div className="loginsingup-container">
        <h1>Sing Up </h1>
        <div className="loginsingup-fields">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter your EmailAddress" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <Link to="">Login Here</Link>
        </p>
        <div className="loginsingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};
export default LoginSingup;
