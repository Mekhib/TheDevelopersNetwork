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
    results: [
      {
        header: "test",
        image:
          "http://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1",
        summary: "something something something darkside",
        metalink: "google.com",
        link: "googe.com"
      }
    ]
  };
  learnSearch = () => {
    axios.get("/npm").then(res => {
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
              learnSearch={this.learnSearch}
              results={this.state.results}
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
