import React, { useReducer, useState } from "react";
import "../styles/TodoApp.css"; // Import the CSS file

const TodoApp = ({ userName }) => {
  // Initial state
  const initialState = { todos: [] };

  // Reducer function
  function todoReducer(state, action) {
    switch (action.type) {
      case "add":
        // Prevent adding empty or whitespace-only todos
        if (!action.payload.trim()) return state;
        return {
          todos: [
            ...state.todos,
            { id: Date.now(), text: action.payload.trim() },
          ],
        };
      case "delete":
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case "clear":
        return { todos: [] };
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim()) {
      dispatch({ type: "add", payload: input });
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-app-wrapper">
      <h1>{userName ? `${userName}'s Todo List` : "My Todo List"}</h1>
      <div className="todo-input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      {state.todos.length === 0 && (
        <p style={{ textAlign: "center", color: "#6c757d" }}>
          No tasks yet. Add some!
        </p>
      )}

      <ul className="todo-list">
        {state.todos.map(
          (
            todo // Changed i to todo.id for key
          ) => (
            <li key={todo.id} className="todo-item">
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch({ type: "delete", payload: todo.id })}
                className="delete-button"
                aria-label={`Delete task: ${todo.text}`}
              >
                Delete
              </button>
            </li>
          )
        )}
      </ul>

      {state.todos.length > 0 && (
        <button
          onClick={() => dispatch({ type: "clear" })}
          className="clear-all-button"
        >
          Clear All Tasks
        </button>
      )}
    </div>
  );
};

export default TodoApp;
