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
    console.log("mounted");
    axios.get("/main").then(res => {
      console.log("JSON VERSION!" + JSON.stringify(res, null, 2));
      this.setState({ results: res.data.articles });
      console.log("CSCS!" + res);
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("VALUE" + this.state.search);
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
            console.log("inital response:" + res);
            this.setState({ results: res.data });
            console.log(this.state.results);
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
            console.log("inital response:" + res);
            this.setState({ results: res.data });
            console.log(this.state.results);
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
            console.log("inital response:" + res);
            this.setState({ results: res.data });
            console.log(this.state.results);
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
            console.log("inital response:" + res);
            this.setState({ results: res.data });
            console.log(this.state.results);
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
            console.log("inital response:" + res);
            this.setState({ results: res.data });
            console.log(this.state.results);
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
            console.log("inital response:" + res);
            this.setState({ results: res.data });
            console.log(this.state.results);
          });
  };
  tagresult = e => {
    var tag = e.currentTarget.getAttribute("value");
    axios.get("/tag/" + tag).then(res => {
      console.log("inital response:" + res);
      this.setState({ results: res.data });
      console.log(this.state.results);
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
