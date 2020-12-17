import React, { useEffect, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.random() * 12345,
      text: input,
    });
    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="todo..."
        name="text"
        onChange={handleInput}
      />
      <button className="todo-button">追加</button>
    </form>
  );
}

export default TodoForm;
