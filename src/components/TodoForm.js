import React, { useEffect, useRef, useState } from "react";
import { Input, Button } from "antd";

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

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={input}
        placeholder="todo..."
        name="text"
        onChange={handleInput}
        ref={inputRef}
        style={{ width: "80%" }}
      />
      <Button onClick={handleSubmit} style={{ width: "20%" }}>
        追加
      </Button>
    </form>
  );
}

export default TodoForm;
