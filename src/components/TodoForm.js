import React, { useEffect, useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");

  return (
    <form className="todo-form">
      <input
        type="text"
        value={input}
        placeholder="todo..."
        name="text"
        onClick={setInput}
      />
    </form>
  );
}

export default TodoForm;
