import React from "react";
import "./cssfiles/card.css";
import "../components/cssfiles/search.css";

export function Card(props) {
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
