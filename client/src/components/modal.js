import React from "react";
import { render } from "react-dom";
import Modal from "react-responsive-modal";

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
    summary: ""
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <h2>react-responsive-modal</h2>
        {/* <button onClick={this.onOpenModal}>Open modal</button> */}
        <a onClick={this.onOpenModal} class="waves-effect waves-light btn">
          <i class="material-icons left">add</i>add
        </a>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Simple centered modal</h2>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    placeholder="Placeholder"
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    disabled
                    defaultValue="I am not editable"
                    id="disabled"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="disabled">Disabled</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="col s12">
                  This is an inline input field:
                  <div className="input-field inline">
                    <input
                      id="email_inline"
                      type="email"
                      className="validate"
                    />
                    <label htmlFor="email_inline">Email</label>
                    <span
                      className="helper-text"
                      data-error="wrong"
                      data-success="right"
                    >
                      Helper text
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}
export default App;
render(<App />, document.getElementById("root"));
