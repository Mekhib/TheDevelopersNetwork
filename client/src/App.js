import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Contianer from "./components/cardcontainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={Nav} />
        <Route exact path="/test" component={Contianer} />
      </Switch>
    </Router>
  );
}

export default App;
