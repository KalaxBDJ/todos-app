// Import CSS
import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { todos, completedTodos } = React.useContext(TodoContext);
  // return JSX
  return (
    <h1 className="TodoCounter">
      You've completed <span>{completedTodos}</span> of{" "}
      <span>{todos.length}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
