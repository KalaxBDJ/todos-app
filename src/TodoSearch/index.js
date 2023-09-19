import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  // Using context
  const { setSearchValue, searchValue } = React.useContext(TodoContext);

  return (
    <input
      placeholder="Search TODOs"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    ></input>
  );
}

export { TodoSearch };
