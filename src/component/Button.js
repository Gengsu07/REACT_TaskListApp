import React, { Component } from "react";
import "../style/Button.css";

const Button = ({ text, varian, action }) => {
  return (
    <div className={`btn btn-${varian}`}>
      <button type="button" onClick={action}>
        {text}
      </button>
    </div>
  );
};
export default Button;
