import { render } from "@testing-library/react";
import React, { Component } from "react";
import Todo from "./Todo";

const TodoList = ({ todo, del, edit, remove }) => {
  return (
    <div>
      {todo.map((tugas, i) => {
        return (
          <Todo key={i} tugas={tugas} del={del} edit={edit} remove={remove} />
        );
      })}
    </div>
  );
};
export default TodoList;
