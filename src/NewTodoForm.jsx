import React, { useState } from "react";

const NewTodoForm = ({ onAddedTodo }) => {
  const [newItem, setNewItem] = useState("");

  const inputChangeHandler = (event) => {
    setNewItem(event.target.value);
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();

    if (newItem === "") return;

    onAddedTodo(newItem);

    setNewItem("");
  };

  return (
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
  );
};

export default NewTodoForm;
