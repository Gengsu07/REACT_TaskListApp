import React, { Component } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Todo = ({ tugas, del, edit }) => {
  const delById = (id) => {
    del(id);
  };

  if (tugas.id !== "") {
    return (
      <div style={TodoStyle}>
        <h4>{tugas.title}</h4>
        <div style={ButtonStyle}>
          <Button
            text="edit"
            varian="green"
            action={() => edit(tugas.id, tugas.title)}
          />
          <Button text="delete" varian="red" action={() => delById(tugas.id)} />
        </div>
      </div>
    );
  }
};
export default Todo;

const TodoStyle = {
  background: "#218DFD",
  margin: "0.5rem 0",
  color: "#ffff",
  padding: "0 1rem",
  height: "3rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const ButtonStyle = {
  display: "flex",
  justifyContent: "space-between",
};
