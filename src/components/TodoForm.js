import React, { useEffect, useRef, useState } from "react";
import { Input, Button } from "antd";

function TodoForm({ edit, onSubmit }) {
  const [input, setInput] = useState(edit ? edit.value : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
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
        placeholder={edit ? "edit todo ..." : "add todo ..."}
        name="text"
        onChange={handleInput}
        ref={inputRef}
        style={{ width: "80%" }}
      />
      <Button onClick={handleSubmit} style={{ width: "20%" }}>
        {edit ? "更新" : "追加"}
      </Button>
    </form>
  );
}

export default TodoForm;
