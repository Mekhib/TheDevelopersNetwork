import React, { Component } from "react";
import "./cssfiles/tags.css";
import Axios from "axios";
class tags extends Component {
  componentDidMount() {
    console.log("tag props", this.props);
  }
  state = {
    website: "",
    img: "",
    likes: 0,
    summary: ""
  };

  render() {
    return (
      <div id="tags">
        <div
          className="animated bounceInRight chip"
          id="chip2"
          value="html"
          onClick={this.props.tagresult}
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
            alt="logo"
          />
          HTML
        </div>
        <div
          className="animated bounceInRight chip"
          id="chip3"
          value="css"
          onClick={this.props.tagresult}
        >
          <img
            src="https://cdn0.iconfinder.com/data/icons/coding-files-icons-rounded/110/Css-512.png"
            alt="logo"
          />
          CSS
        </div>
        <div
          className="animated bounceInRight chip"
          onClick={this.props.tagresult}
          id="chip4"
          value="javascript"
        >
          <img
            src="https://icons-for-free.com/iconfiles/png/512/command+develop+javascript+language+programming+software+icon-1320165727225308896.png"
            alt="logo"
          />
          JavaScript
        </div>
        <div
          className="animated bounceInRight chip"
          id="chip5"
          value="react"
          onClick={this.props.tagresult}
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_960_720.png"
            alt="logo"
          />
          React
        </div>
        <div
          className="animated bounceInRight chip"
          id="chip6"
          value="python"
          onClick={this.props.tagresult}
        >
          <img
            src="https://mpng.pngfly.com/20180509/gvq/kisspng-computer-icons-python-programming-language-5af3b9e657db44.4301672315259222783599.jpg"
            alt="logo"
          />
          Python
        </div>
        <div
          className="animated bounceInRight chip"
          id="chip7"
          value="C#"
          onClick={this.props.tagresult}
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/flat-colored-borderless-file-formats/256/file_format_22-512.png"
            alt="logo"
          />
          C#
        </div>
        <div
          className="animated bounceInRight chip"
          id="chip8"
          value="C++"
          onClick={this.props.tagresult}
        >
          <img
            src="https://cdn3.iconfinder.com/data/icons/programming-16/512/programming_6_00001-2-512.png"
            alt="logo"
          />
          C++
        </div>
        <div
          className="animated bounceInRight chip"
          id="chip9"
          value="java"
          onClick={this.props.tagresult}
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Java.png"
            alt="logo"
          />
          Java
        </div>
        <div
          className="animated bounceInRight chip"
          id="chip10"
          value="sql"
          onClick={this.props.tagresult}
        >
          <img
            src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/7/1769.12-sql-icon-iconbunny.jpg"
            alt="logo"
          />
          SQL
        </div>
      </div>
    );
  }
}
export default tags;
