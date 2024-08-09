import React from "react";
import "./ListTodos.css";
import AddTodos from "./AddTodos";
import { toast } from "react-toastify";
class ListTodos extends React.Component {
  state = {
    ListTodos: [
      { id: 1, title: "Learn React", completed: false },
      { id: 2, title: "Learn Vue", completed: false },
      { id: 3, title: "Learn Angular", completed: false },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });
    toast.success("New todo added successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.ListTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      ListTodos: currentTodos,
    });
  };
  handleEditTodo = (todo) => {
    let { editTodo, ListTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...ListTodos];
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
      listTodoCopy[objIndex].title = editTodo.title;
      this.setState({
        ListTodos: listTodoCopy,
        editTodo: {},
      });
      toast.success("Todo updated successfully");
      return;
    }
    // edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { ListTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">>> check empty obj", isEmptyObj);
    return (
      <div className="list-todo-container">
        <h1>List To do</h1>
        <AddTodos addNewTodo={this.addNewTodo} />
        <div className="list-todos">
          {ListTodos &&
            ListTodos.length > 0 &&
            ListTodos.map((item, index) => {
              return (
                <div key={index} className="todo-child">
                  {isEmptyObj === true ? (
                    <span>
                      <input type="checkbox" />
                      <span>{item.title}</span>
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          <input type="checkbox" />
                          <input
                            type="text"
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleOnChangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span>
                          <input type="checkbox" />
                          <span>{item.title}</span>
                        </span>
                      )}
                    </>
                  )}
                  <div className="buttons">
                    <button
                      type="button"
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className={
                        isEmptyObj === false && editTodo.id === item.id
                          ? "save-button"
                          : "edit-button"
                      }
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListTodos;
