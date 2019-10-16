import React from "react";
function Signup() {
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
        {/* signup Form */}
        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="Name"
            placeholder="What is your name?"
          />
          <input
            type="text"
            id="login"
            className="fadeIn third"
            name="username"
            placeholder="Enter a Username"
          />
          <input
            type="text"
            id="login"
            className="fadeIn third"
            name="email"
            placeholder="Enter a email!"
          />
          <input
            type="text"
            name="email"
            id="login"
            className="fadeIn fourth"
            placeholder="Enter your password here!"
          />
          <input
            type="submit"
            className="fadeIn fourth"
            defaultValue="sign Up"
          />
        </form>
      </div>
    </div>
  );
}

export default Signup;
