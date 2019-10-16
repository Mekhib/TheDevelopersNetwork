import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className="searchbtn">
      {children}
    </button>
  );
}

export default Button;
