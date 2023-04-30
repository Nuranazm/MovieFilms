import React from "react";

function Button({ children, ...otherProps }) {
  return (
    <div>
      <button className="btn" {...otherProps}>
        {children}
      </button>
    </div>
  );
}

export default Button;