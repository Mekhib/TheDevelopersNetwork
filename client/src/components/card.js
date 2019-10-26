import React from "react";
import "./cssfiles/card.css";
import CardClass from "./Cardclass";
function Card(props) {
  console.log("test2" + props);
  return (
    <div className="col s12 m7 waves-effect " id="maincard">
      <h2 className="header">{props.header}</h2>
      <div className="card horizontal">
        <div className="card-image">
          <img src={props.image} alt="imglogo" />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{props.blurb}</p>
          </div>
          <div className="card-action">
            <a href={props.metalink}>{props.link}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
