import React, { Component } from "react";
import Card from "./card.js";
import Cardcontainer from "./cardcontainer.js";
import APP from "../App";

class Cardclass extends Component {
  componentDidMount() {
    console.log("Mounted!");
    console.log(this.props.results);
  }
  render() {
    return (
      <>
        {this.props.results.map(items => {
          return (
            <Card
              header={items.title}
              // image={items.pagemap.cse_image[0]}
              blurb={items.snippet}
              metalink={items.displayLink}
              link={items.link}
            />
          );
        })}
      </>
    );
  }
}
export default Cardclass;
