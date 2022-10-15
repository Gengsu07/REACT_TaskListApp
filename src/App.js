import todolist from "./todolist.png";
import "./App.css";
import React, { Component } from "react";
import FormInput from "./component/FormInput";
import TodoList from "./component/ToDoList";
import EditModal from "./component/EditModal";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [{ id: "", title: "" }],
      input: "",
      isEdited: false,
      EditData: {
        id: "",
        title: "",
      },
    };
  }
  TaskOnChange = (event) => {
    this.setState({
      EditData: {
        ...this.state.EditData,
        title: event.target.value,
      },
    });
  };

  OpenModal = (id, data) => {
    this.setState({
      isEdited: true,
      EditData: {
        id,
        title: data,
      },
    });
  };
  CloseModal = () => {
    this.setState({ isEdited: false });
  };

  FormInputOnType = (event) => {
    this.setState({ input: event.target.value });
  };
  FormInputOnClick = (event) => {
    this.setState({ input: "" });
  };
  ButtonDelete = (id) => {
    this.setState({
      todo: this.state.todo.filter((item) => {
        return item.id !== id;
      }),
    });
  };
  ButtonAdd = (event) => {
    const id = this.state.todo.length;
    const newData = {
      id: id + 1,
      title: event,
    };
    this.setState({ todo: [...this.state.todo, newData] });
    this.setState({ input: "" });
  };
  ButtonSave = () => {
    const { id, title } = this.state.EditData;
    const newData = { id, title };
    const newTodo = this.state.todo;
    newTodo.splice(id - 1, 1, newData);
    this.setState({
      todo: newTodo,
      isEdited: false,
      EditData: {
        id: "",
        title: "",
      },
    });
  };

  render() {
    return (
      <div className="app">
        <div className="logo">
          <img src={todolist} alt="Logo"></img>
          <h3>Task List</h3>
          <p>"There is a will, There is a way</p>
          <div className="todo">
            <TodoList
              todo={this.state.todo}
              del={this.ButtonDelete}
              edit={this.OpenModal}
            />
          </div>
          <div className="forminput">
            <FormInput
              input={this.state.input}
              onclick={this.FormInputOnClick}
              searchChange={this.FormInputOnType}
              add={this.ButtonAdd}
            />
          </div>
          <div className="editmodal">
            <EditModal
              modal={this.state.isEdited}
              data={this.state.EditData}
              close={this.CloseModal}
              change={this.TaskOnChange}
              save={this.ButtonSave}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
