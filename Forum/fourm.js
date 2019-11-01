import React from "react";
import ScriptTag from "react-script-tag";
import "../client/src/components/cssfiles/forum.css";
var Forum = React.createClass({
  render: function() {
    return (
      <ScriptTag isHydrating={true} type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.js" />  
      <ScriptTag isHydrating={true} type="text/javascript" src="./innerforum.js" />
    <ScriptTag isHydrating={true} type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"/>
    <ScriptTag isHydrating={true} type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />

      <div>
        <div id="root">
          <div id="cardcontainer">
            <div>
              <nav className="nav-extended z-depth-5">
                <div className="nav-wrapper">
                  <a
                    href="#"
                    data-target="mobile-demo"
                    className="sidenav-trigger"
                  >
                    <i className="material-icons">TDN</i>
                  </a>
                  <div id="logoimagediv">
                    <img
                      src="https://img.icons8.com/cotton/2x/developer.png"
                      alt="logo"
                      id="logoimage"
                    />
                  </div>
                  <input
                    type="text"
                    name="search"
                    className="search"
                    placeholder="Boo!...lean"
                  />
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                      <a href="sass.html">Sass</a>
                    </li>
                    <li>
                      <a href="badges.html">Components</a>
                    </li>
                    <li>
                      <a href="collapsible.html">JavaScript</a>
                    </li>
                  </ul>
                </div>
                <div className="nav-content">
                  <ul className="tabs tabs-transparent">
                    <li className="tab">
                      <a href="#test1">The Forums</a>
                    </li>
                    <li className="tab">
                      <a className="active" href="#test2">
                        Search
                      </a>
                    </li>
                    <li className="tab">
                      <a href="#test3">Cheet sheet</a>
                    </li>
                    <li className="tab">
                      <a href="#test4">Profiles</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <ul className="sidenav" id="mobile-demo">
                <li>
                  <a href="sass.html">Sass</a>
                </li>
                <li>
                  <a href="badges.html">Components</a>
                </li>
                <li>
                  <a href="collapsible.html">JavaScript</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="tags">
          <div className="chip">
            <img
              src="https://www.trzcacak.rs/myfile/detail/496-4969994_plus-png-plus-icon-png-flat.png"
              alt="logo"
            />
            ADD
          </div>
          <div className="chip">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
              alt="logo"
            />
            HTML
          </div>
          <div className="chip">
            <img
              src="https://cdn0.iconfinder.com/data/icons/coding-files-icons-rounded/110/Css-512.png"
              alt="logo"
            />
            CSS
          </div>
          <div className="chip">
            <img
              src="https://icons-for-free.com/iconfiles/png/512/command+develop+javascript+language+programming+software+icon-1320165727225308896.png"
              alt="logo"
            />
            JavaScript
          </div>
          <div className="chip">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/30/17/41/javascript-2189147_960_720.png"
              alt="logo"
            />
            React
          </div>
          <div className="chip">
            <img
              src="https://mpng.pngfly.com/20180509/gvq/kisspng-computer-icons-python-programming-language-5af3b9e657db44.4301672315259222783599.jpg"
              alt="logo"
            />
            Python
          </div>
          <div className="chip">
            <img
              src="https://cdn3.iconfinder.com/data/icons/flat-colored-borderless-file-formats/256/file_format_22-512.png"
              alt="logo"
            />
            C#
          </div>
          <div className="chip">
            <img
              src="https://cdn3.iconfinder.com/data/icons/programming-16/512/programming_6_00001-2-512.png"
              alt="logo"
            />
            C++
          </div>
          <div className="chip">
            <img
              src="https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Java.png"
              alt="logo"
            />
            Java
          </div>
          <div className="chip">
            <img
              src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/7/1769.12-sql-icon-iconbunny.jpg"
              alt="logo"
            />
            SQL
          </div>
        </div>
        <div className="nav-side-menu">
          <div className="brand">The Developers Network</div>
          <i
            className="fa fa-bars fa-2x toggle-btn"
            data-toggle="collapse"
            data-target="#menu-content"
          />
          <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
              <li>
                <a href="#">
                  {" "}
                  <i className="fa fa-dashboard fa-lg" /> Main Forum{" "}
                </a>
              </li>
              <li
                data-toggle="collapse"
                data-target="#products"
                className="collapsed active"
              >
                <a href="#">
                  <i className="fa fa-gift fa-lg" /> Profile
                  <span className="arrow" />
                </a>
              </li>
              <ul className="sub-menu collapse" id="products">
                <li className="active">
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">My post</a>
                </li>
                <li>
                  <a href="#">Sign-Out</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">TOS</a>
                </li>
                <li>
                  <a href="#">Other Legal</a>
                </li>
              </ul>
              <li
                data-toggle="collapse"
                data-target="#service"
                className="collapsed"
              >
                <a href="#">
                  <i className="fa fa-globe fa-lg" /> Dev Jokes
                </a>
              </li>
              <li
                data-toggle="collapse"
                data-target="#new"
                className="collapsed"
              >
                <a href="#">
                  <i className="fa fa-car fa-lg" /> New{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="fa fa-user fa-lg" /> Profile{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  {" "}
                  <i className="fa fa-users fa-lg" /> Users{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fixed-action-btn">
          <a className="btn-floating btn-large red">
            <i className="large material-icons">mode_edit</i>
          </a>
          <ul>
            <li>
              <a className="btn-floating red">
                <i className="material-icons">comment</i>
              </a>
            </li>
            <li>
              <a className="btn-floating yellow darken-1">
                <i className="material-icons">account_box</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});
export default Forum;
