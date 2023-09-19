import './TodoList.css';

function TodoList({ children }) {
    return (
        <ul className="TodoList" style={{
            paddingTop: '10px'
        }}>
            {children}
        </ul>
    );
}

export {
    TodoList
};