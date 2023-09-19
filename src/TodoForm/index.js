import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { setopenModal, addTodo } = React.useContext(TodoContext);
  const [newTodoValue, setnewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setopenModal(false);
  };

  const onCancel = (event) => {
    event.preventDefault();
    setopenModal(false);
  };

  const onChange = (event) => {
    setnewTodoValue(event.target.value);
  }

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <div className="TodoForm-labelContainer">
        <label>Add a new TODO</label>
      </div>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        className="TodoForm-textarea"
        placeholder="Write your TODO title here."
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
