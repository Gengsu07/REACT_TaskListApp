import React, { Component } from "react";
import "../style/FormInput.css";
import Button from "./Button";

const FormInput = ({ input, onclick, searchChange, add }) => {
  const Add = (item) => {
    item.preventDefault();
    if (input !== "") {
      add(input);
    }
  };
  return (
    <div>
      <form style={FormInputStyle} onSubmit={Add}>
        <input
          type="text"
          placeholder="Add new task here"
          value={input}
          onClick={onclick}
          style={FormInputText}
          onChange={searchChange}
        ></input>
        <Button text="add" varian="add" action={Add} />
      </form>
    </div>
  );
};

export default FormInput;

const FormInputStyle = {
  background: "#FFFFFF",
  margin: "0.5rem 0",
  color: "#CDCDCD",
  padding: "0 1rem",
  height: "3rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const FormInputText = {
  background: "#FFFFFF",
  margin: "0.5rem 0",
  color: "#CDCDCD",
  fontFamilly: "Roboto",
  padding: "0 1rem",
  height: "3rem",
  width: "80%",
  border: "none",
};
