import React, { useState } from "react";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });
  const submitUpdate = (val) => {
    updateTodo(edit.id, val);
    setEdit({ id: null, value: "" });
  };

  return todos.map((todo, index) => {
    return todo.id === edit.id ? (
      <TodoForm edit={edit} onSubmit={submitUpdate} />
    ) : (
      <div
        key={index}
        className={"todo-row" + todo.isComplete ? "complete" : ""}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <AiFillCloseCircle onClick={() => removeTodo(todo.id)} />
          <AiFillEdit
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            className="edit-icon"
          />
        </div>
      </div>
    );
  });
}

export default Todo;
