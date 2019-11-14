import React, { Component } from "react";
import "../components/cssfiles/search.css";
import List from "./List";
import Button from "./Button/index.js";
import Cardcontainer from "./cardcontainer";
import Axios from "axios";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }
  render() {
    console.log("PROPS", this.props);
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
              class="search glow-on-hover"
              placeholder="Boo!...lean"
              onChange={this.props.handleinputchange}
              //this.state.search
              // onClick={this.handleFormSubmit}
            />
            <button
              class="glow-on-hover"
              type="button"
              onClick={this.props.handleFormSubmit}
            >
              <p id="btnwrd">Search</p>

              <i class="material-icons" id="searchicon">
                search
              </i>
            </button>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <a href="/fourms/home">The Forums</a>
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
        <List
          git={this.props.git}
          learn={this.props.learnSearch}
          main={this.props.mainSearch}
          npm={this.props.npmSearch}
          api={this.props.apiSearch}
          stack={this.props.stackSearch}
        />
      </div>
    );
  }
}

export default Search;
