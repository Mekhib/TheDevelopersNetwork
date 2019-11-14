/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../components/cssfiles/list.css";
import "../components/cssfiles/mainlist.css";
import "./cardcontainer";
function List(props) {
  return (
    <div class="animated bounceInLeft w3-sidebar w3-bar-block w3-padding z-depth-3">
      <h3 class="w3-bar-item" id="listtitle">
        Menu
      </h3>
      <a
        href="#"
        class="w3-bar-item w3-button"
        id="list1"
        onClick={() => {
          return props.stack(props.results);
        }}
      >
        <img
          src="https://cdn4.iconfinder.com/data/icons/miu-gloss-social/60/stackoverflow-512.png"
          id="listimage"
          alt=""
        ></img>
        <div className="listtext2">Stack Search</div>
      </a>
      <a
        href="#"
        class="w3-bar-item w3-button"
        id="list2"
        onClick={() => {
          return props.npm(props.results);
        }}
      >
        <img
          src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-512.png"
          id="listimage"
          alt=""
        ></img>
        <div className="listtext2">Node Modules</div>
      </a>
      <a
        href="#"
        class="w3-bar-item w3-button hoverable"
        id="list3"
        onClick={() => {
          return props.api(props.results);
        }}
      >
        {" "}
        <img
          src="https://image.flaticon.com/icons/png/512/1465/1465558.png"
          id="listimage"
          alt=""
        ></img>
        <div className="listtext">API</div>
      </a>
      <a
        href="#"
        class="w3-bar-item w3-button hoverable"
        id="list4"
        onClick={() => {
          return props.git(props.results);
        }}
      >
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          id="listimage"
          alt=""
        ></img>
        <div className="listtext">Github</div>
      </a>
      <a
        href="#"
        class="w3-bar-item w3-button hoverable"
        id="list5"
        onClick={() => {
          return props.learn(props.results);
        }}
      >
        <img
          src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/video512x512.png"
          id="listimage"
          alt=""
        ></img>
        <div className="listtext">Video</div>
      </a>
      <a
        href="#"
        class="w3-bar-item w3-button hoverable"
        id="list6"
        onClick={() => {
          return props.learn(props.results);
        }}
      >
        <img
          src="https://image.flaticon.com/icons/png/512/564/564772.png"
          id="listimage"
          alt=""
        ></img>
        <div className="listtext2">learn Search</div>
      </a>
      <a href="#" class="w3-bar-item w3-button hoverable">
        <img
          src="https://cdn.dribbble.com/users/3499895/screenshots/6436578/learn_logo_2x.jpg"
          id="listimage"
          alt=""
          onClick={() => {
            return props.learn(props.results);
          }}
        ></img>
        Learn Search
      </a>
    </div>
  );
}
export default List;
