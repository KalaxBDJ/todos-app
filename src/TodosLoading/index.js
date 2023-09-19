import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loading-text">Cargando...</p>
    </div>
  );
}

export { TodosLoading };
