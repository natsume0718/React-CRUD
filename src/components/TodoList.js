import React, { useState } from "react";
import TodoForm from "./TodoForm";

export const TodoList = () => {
  const [todos, setTodo] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || !/^\s*$/.test(todo.text)) {
      return;
    }
    const newTodo = [todo, ...todos];
  };
  return (
    <div>
      <h1>ToDoリスト</h1>
      <TodoForm></TodoForm>
    </div>
  );
};
