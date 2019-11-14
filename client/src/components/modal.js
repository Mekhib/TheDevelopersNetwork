import React from "react";
import { render } from "react-dom";
import Modal from "react-responsive-modal";
import axios from "axios";
import "../components/cssfiles/modal.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  state = {
    open: false,
    website: "",
    img: "",
    title: "",
    summary: "",
    tag: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  addtag = () => {
    console.log("clicked");
    axios
      .post("/addtag", {
        website: this.state.website,
        img: this.state.img,
        title: this.state.title,
        summary: this.state.summary,
        tag: this.state.tag
      })
      .then(res => {
        console.log(res);
        alert("Your tag for " + res.data.website + " " + "is in! Thank you!");
      });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <a
          onClick={this.onOpenModal}
          class="animated bounceInRight waves-effect waves-light btn"
          id="modalbtn"
        >
          <i class="material-icons left">add</i>add
        </a>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>tag A Site</h2>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    placeholder="Placeholder"
                    id="website"
                    type="text"
                    name="website"
                    className="validate"
                    value={this.state.website}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="website">Website</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="title"
                    type="text"
                    className="validate"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="title">title</label>
                </div>
              </div>
              <div className="row">
                <div className="browser-default input-field col s12">
                  <input
                    id="tag"
                    type="text"
                    className="validate"
                    name="tag"
                    value={this.state.tag}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="tag">tag</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="Summary"
                    type="email"
                    className="validate"
                    name="summary"
                    value={this.state.summary}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="Summary">Summary</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="imagetag"
                    type="text"
                    className="validate"
                    name="img"
                    value={this.state.img}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor="img">Img(Please, in jpeg or png only)</label>
                </div>
              </div>
            </form>
            <a class="waves-effect waves-light btn" onClick={this.addtag}>
              <i class="material-icons left">add</i>
              add Tag
            </a>
          </div>
        </Modal>
      </div>
    );
  }
}
export default App;
render(<App />, document.getElementById("root"));
