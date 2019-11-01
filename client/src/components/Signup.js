import React, { Component } from "react";
import "../../src/components/cssfiles/theme.css";
import Axios from "axios";
import "./cssfiles/button.css";
class Signup extends Component {
  state = {
    name: "",
    username: "",
    email: "",
    password: "",
    picture: ""
  };
  newuser = e => {
    e.preventDefault();
    console.log(this.state);
    console.log("working!");
    Axios({
      method: "POST",
      url: "/createuser",
      data: this.state,
      config: { headers: { "Content-Type": "multipart/form-data" } }
    }).then(response => console.log(response));
  };
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.value);
  };
  render() {
    return (
      <div className="browser-default wrapper fadeInDown browser-default">
        <div id="formContent">
          {/* Tabs Titles */}
          <h2 className="browser-default active"> Sign In </h2>
          <h2 className="browser-default inactive underlineHover">Sign Up </h2>
          {/* Icon */}
          <div className="browser-default fadeIn first">
            <img
              src="https://cdn2.iconfinder.com/data/icons/web-development1-new-color1-1/128/Web_development_-_1_-White_Source-modify-_Color1-18-512.png"
              id="icon"
              alt="User Icon"
            />
          </div>
          {/* signup Form */}
          <form>
            <input
              type="text"
              id="login"
              className="browser-default fadeIn third"
              name="username"
              value={this.state.username}
              placeholder="Enter a Username"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              id="login"
              className="browser-default fadeIn second"
              name="name"
              value={this.state.name}
              placeholder="What is your name?"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              id="login"
              className="browser-default fadeIn third"
              name="email"
              placeholder="Enter a email!"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="password"
              id="login"
              className="browser-default fadeIn fourth"
              placeholder="Enter your password here!"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="picture"
              id="login"
              className="browser-default fadeIn fourth"
              value={this.state.picture}
              placeholder="Enter a picture URL (Must be a jpeg or Png file(.png, .jpeg))"
              onChange={this.handleInputChange}
            />
            <input
              type="submit"
              className="browser-default fadeIn fourth"
              defaultValue="sign Up"
              onClick={this.newuser}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
