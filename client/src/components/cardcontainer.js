import React, { Component } from "react";
import "./cssfiles/container.css";
import Tags from "./tags.js";
import Nav from "./Nav";
import List from "./List";
import Card from "./card.js";
import Cardclass from "./Cardclass";
function container(props) {
  console.log(props.results);
  return (
    <div id="cardcontainer">
      <Nav />
      <List learn={props.learnSearch} />
      <Tags />
      <Cardclass learn={props.learnSearch} results={props.results} />
      <div id="cards">
        <Card />
      </div>
    </div>
  );
}

export default container;
