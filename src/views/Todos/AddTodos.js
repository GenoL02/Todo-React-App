import React from "react";
import { toast } from "react-toastify";

class AddTodos extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTittle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    let { title } = this.state;
    if (!this.state.title) {
      toast.error("Please enter todo title", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (title) {
      this.props.addNewTodo({
        id: new Date().getTime(),
        title,
        completed: false,
      });
      this.setState({
        title: "",
      });
    }
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add todo"
          value={title}
          onChange={(event) => this.handleOnChangeTittle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodos;
