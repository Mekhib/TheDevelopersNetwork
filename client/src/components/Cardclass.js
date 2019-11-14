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
    console.log(this.props.results);
    return (
      <>
        {this.props.results &&
          this.props.results.map(items => {
            return (
              <Card
                header={items.title}
                image={
                  items.urlToImage
                    ? items.urlToImage
                    : (((items.pagemap || {}).cse_image || {})[0] || {}).src
                    ? (((items.pagemap || {}).cse_image || {})[0] || {}).src
                    : items.img
                    ? items.img
                    : "https://www.webdevelopersnotes.com/wp-content/uploads/create-a-simple-home-page.png"
                }
                blurb={
                  items.snippet
                    ? items.snippet
                    : items.content
                    ? items.content
                    : items.summary
                }
                metalink={
                  items.displayLink
                    ? items.displayLink
                    : items.url
                    ? items.url
                    : items.website
                }
                link={
                  items.link
                    ? items.link
                    : items.url
                    ? items.url
                    : items.website
                }
              />
            );
          })}
      </>
    );
  }
}
export default Cardclass;
