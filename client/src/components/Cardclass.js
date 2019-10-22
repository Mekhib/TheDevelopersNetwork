import React, { Component } from "react";
import Card from "./card.js";
import Button from "./Button/index.js";
import Cardcontainer from "./cardcontainer.js";
import Axios from "axios";
import Nav from "./Nav.js";

class Cardclass extends Component {
  componentDidMount() {
    console.log("Mounted!");
    Axios.get("/hello").then(res => {
      console.log("inital response:" + res);
      this.setState({ results: res.data });
      console.log(this.state.results);
    });
  }
  state = {
    results: []
  };
  learnsearch = () => {
    console.log("you clicked it");
    Axios.get("/hello").then(res => {
      console.log(res);
      this.setState({ results: res.data });
      console.log(this.state.results);
    });
  };
  render() {
    return (
      <div>
        <Nav startup={this.state} />
        <Cardcontainer>
          {this.state.results.map(function(site, index) {
            return (
              <div>
                <Card
                  header={site.title}
                  image={site.pagemap.cse_image[0]}
                  blurb={site.snippet}
                  link={site.formattedURL}
                  metalink={site.formattedURL}
                />
                <Button onClick={this.learnsearch()}>hello</Button>
              </div>
            );
          })}
        </Cardcontainer>
      </div>
    );
  }
}
export default Cardclass;
