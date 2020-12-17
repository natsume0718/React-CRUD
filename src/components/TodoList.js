import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    // スプレッド構文で先頭に挿入
    const newTodo = [todo, ...todos];
    setTodos(newTodo);
    console.log(...todos);
  };

  const completeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.isComplete = true;
    setTodos(todo);
  };

  const updateTodo = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };
  return (
    <div>
      <h1>ToDoリスト</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      ></Todo>
    </div>
  );
};
