import React, { Component } from "react";
import "./cssfiles/container.css";
import Tags from "./tags.js";
import Nav from "./Nav";
import List from "./List";
import Card from "./card.js";
import App from "./modal";
import Cardclass from "./Cardclass";
function container(props) {
  console.log("!!!!!!", props);
  return (
    <div id="cardcontainer">
      <Nav
        learnSearch={props.learnSearch}
        results={props.results}
        main={props.mainSearch}
        npm={props.npmSearch}
        api={props.apiSearch}
        git={props.gitSearch}
        stack={props.stackSearch}
        handleinputchange={props.handleInputChange}
        handleFormSubmit={props.handleFormSubmit}
      />
      <List
        learn={props.learnSearch}
        main={props.mainSearch}
        npm={props.npmSearch}
        api={props.apiSearch}
        git={props.gitSearch}
        stack={props.stackSearch}
      />
      <div id="cards">
        <Tags />
        <Cardclass
          learn={props.learnSearch}
          results={props.results}
          main={props.mainSearch}
          npm={props.npmSearch}
          api={props.apiSearch}
          git={props.gitSearch}
        />
        <App />
      </div>
    </div>
  );
}

export default container;
