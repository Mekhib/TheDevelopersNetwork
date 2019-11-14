import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Contianer from "./components/cardcontainer";
import axios from "axios";
import Card from "./components/card";

class App extends React.Component {
  state = {
    results: [],
    search: null
  };
  componentDidMount() {
    axios.get("/main").then(res => {
      this.setState({ results: res.data.articles });
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.mainSearch();
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  learnSearch = () => {
    this.state.search === null
      ? alert("please enter a search  term to continue")
      : axios
          .post("/learn", {
            search: this.state.search
          })
          .then(res => {
            this.setState({ results: res.data });
          });
  };
  mainSearch = () => {
    this.state.search === null
      ? alert("please enter a search  term to continue")
      : axios
          .post("/mainsearch", {
            search: this.state.search
          })
          .then(res => {
            this.setState({ results: res.data });
          });
  };
  npmSearch = () => {
    this.state.search === null
      ? alert("please enter a search  term to continue")
      : axios
          .post("/npm", {
            search: this.state.search
          })
          .then(res => {
            this.setState({ results: res.data });
          });
  };
  apiSearch = () => {
    this.state.search === null
      ? alert("please enter a search  term to continue")
      : axios
          .post("/api", {
            search: this.state.search
          })
          .then(res => {
            this.setState({ results: res.data });
          });
  };
  gitSearch = () => {
    this.state.search === null
      ? alert("please enter a search  term to continue")
      : axios
          .post("/github", {
            search: this.state.search
          })
          .then(res => {
            this.setState({ results: res.data });
          });
  };
  Stacksearch = () => {
    this.state.search === null
      ? alert("please enter a search  term to continue")
      : axios
          .post("/stack", {
            search: this.state.search
          })
          .then(res => {
            this.setState({ results: res.data });
          });
  };
  tagresult = e => {
    var tag = e.currentTarget.getAttribute("value");
    axios.get("/tag/" + tag).then(res => {
      this.setState({ results: res.data });
    });
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/home">
            <Contianer
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              learnSearch={this.learnSearch}
              mainSearch={this.mainSearch}
              npmSearch={this.npmSearch}
              apiSearch={this.apiSearch}
              gitSearch={this.gitSearch}
              results={this.state.results}
              stackSearch={this.Stacksearch}
              tagresult={this.tagresult}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
