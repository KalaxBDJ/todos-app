import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  // State for searchValue
  const [searchValue, setSearchValue] = React.useState("");
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage(
    "TODOS_V1",
    []
  );
  const [openModal, setopenModal] = React.useState(false);

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    let newTodos = [...todos];
    let todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => {
      return todo.text === text;
    });

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    let newTodosAdd = [...todos];

    newTodosAdd.push({
      text,
      completed: false,
    });

    saveTodos(newTodosAdd);
  };

  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        todos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        completedTodos,
        openModal,
        setopenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
