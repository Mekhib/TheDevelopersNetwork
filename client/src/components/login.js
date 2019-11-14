import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "../components/cssfiles/theme.css";
import axios from "axios";
import { PromiseProvider } from "mongoose";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  login = e => {
    e.preventDefault();
    axios
      .post("/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if (res.status === 200) {
          alert("welcome back!");
          return <Redirect to="/home" />;
        } else {
          alert(
            "Sorry, your username or password does not match what we have in our system, please try again"
          );
        }
      });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="browser-default wrapper fadeInDown">
        <div id="formContent">
          {/* Tabs Titles */}
          <h2 className="browser-default active"> Sign In </h2>
          <Link to="/signup">
            <h2 className="browser-default inactive underlineHover">
              Sign Up{" "}
            </h2>
          </Link>
          {/* Icon */}
          <div className="browser-default fadeIn first">
            <img
              src="https://cdn2.iconfinder.com/data/icons/web-development1-new-color1-1/128/Web_development_-_1_-White_Source-modify-_Color1-18-512.png"
              id="icon"
              alt="User Icon"
            />
          </div>
          {/* Login Form */}
          <form>
            <input
              type="text"
              id="login"
              className="browser-default fadeIn second"
              name="username"
              placeholder="login"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              id="password"
              className="browser-default fadeIn third"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <input
              type="submit"
              className="browser-default fadeIn fourth"
              defaultValue="Log In"
              onClick={this.login}
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
}

export default Login;
