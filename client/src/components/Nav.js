import React, { Component } from "react";
import "../components/cssfiles/search.css";
import List from "./List";
import Button from "./Button/index.js";
import Cardcontainer from "./cardcontainer";
import Axios from "axios";
class Search extends Component {
  componentDidMount() {
    Axios.get("/hello").then(res => {
      console.log(res.data[2].title);
      this.setState({ value: res.data });
      console.log(this.state.value);
    });
  }
  state = {
    data: [],
    value: ""
  };
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    var opts = {
      method: "GET",
      headers: {}
    };
    fetch("/mainsearch", opts).then(function(response) {
      console.log(response);
    });
    // API.mainsearch(this.state.query)
    //   .then(res => this.setState({ data: res.data }))
    //   .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <nav className="nav-extended z-depth-5">
          <div className="nav-wrapper">
            <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">TDN</i>
            </a>
            <div id="logoimagediv">
              <img
                src="https://img.icons8.com/cotton/2x/developer.png"
                alt="logo"
                id="logoimage"
              ></img>
            </div>
            <input
              type="text"
              name="search"
              class="search"
              placeholder="Boo!...lean"
              onChange={this.handleInputChange}
              //this.state.search
              // onClick={this.handleFormSubmit}
            />
            <Button />
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <a href="#test1">The Forums</a>
              </li>
              <li className="tab">
                <a className="active" href="#test2">
                  Search
                </a>
              </li>
              <li className="tab">
                <a href="#test3">Cheet sheet</a>
              </li>
              <li className="tab">
                <a href="#test4">Profiles</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
        <List />
        <Cardcontainer />
      </div>
    );
  }
}

export default Search;
