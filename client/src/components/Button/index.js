import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button(props) {
  function test() {
    console.log(props);
    props.learn();
  }
  return <button onClick={test}>Test for click me </button>;
}

export default Button;
