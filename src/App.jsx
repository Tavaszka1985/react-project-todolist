import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const inputChangeHandler = (event) => {
    setNewItem(event.target.value);
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: Math.random().toString(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  };

  const toggleTodo = (id, completed, event) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => {
        if (todo.id !== id) {
          return todo;
        }
      });
    });
  };

  return (
    <>
      <form onSubmit={submitChangeHandler} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            type="text"
            id="item"
            onChange={inputChangeHandler}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(event) =>
                    toggleTodo(todo.id, event.target.checked, event)
                  }
                />
                {todo.title}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
