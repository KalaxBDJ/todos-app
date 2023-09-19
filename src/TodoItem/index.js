import "./TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  // Aplicar una clase condicional al icono de verificación para cambiar el color
  const checkIconClass = completed
    ? "Icon Icon-check Icon-check--active"
    : "Icon Icon-check";

  return (
    <li className={`TodoItem ${completed ? "TodoItem--completed" : ""}`}>
      <div className="TodoItem-content">
        <span className={checkIconClass} onClick={onComplete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
        <p className={`TodoItem-p ${!!completed && "TodoItem-p--complete"}`}>
          {text}
        </p>
      </div>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };
