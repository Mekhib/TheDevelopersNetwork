import React, { Component } from "react";
import "./cssfiles/container.css";
import Card from "./card.js";
import Tags from "./tags.js";

function container(props) {
  return (
    <div id="cardcontainer">
      <Card {...props} />
      <Tags></Tags>
    </div>
  );
}

export default container;
