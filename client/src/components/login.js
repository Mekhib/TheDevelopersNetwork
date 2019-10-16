import React from "react";
import "../components/cssfiles/theme.css";

function Login() {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        {/* Tabs Titles */}
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>
        {/* Icon */}
        <div className="fadeIn first">
          <img src="logo.png" id="icon" alt="User Icon" />
        </div>
        {/* Login Form */}
        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input
            type="submit"
            className="fadeIn fourth"
            defaultValue="Log In"
          />
        </form>
        {/* Remind Passowrd */}
        <div id="formFooter">
          <a className="underlineHover" href="google.com">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
