import React from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { openModal, setopenModal } = React.useContext(TodoContext);
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setopenModal(!openModal);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
