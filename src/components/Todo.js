import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { List } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });
  const submitUpdate = (val) => {
    updateTodo(edit.id, val);
    setEdit({ id: null, value: "" });
  };

  return (
    <List
      size="large"
      dataSource={todos}
      renderItem={(todo) =>
        todo.id === edit.id ? (
          <TodoForm edit={edit} onSubmit={submitUpdate} />
        ) : (
          <List.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {todo.text}
            <div>
              <DeleteOutlined
                style={{ marginRight: "0.5rem" }}
                onClick={() => removeTodo(todo.id)}
              />
              <EditOutlined
                onClick={() => setEdit({ id: todo.id, value: todo.text })}
              />
            </div>
          </List.Item>
        )
      }
    />
  );

  // return todos.map((todo, index) => {
  //   return todo.id === edit.id ? (
  //     <TodoForm edit={edit} onSubmit={submitUpdate} />
  //   ) : (
  //     <div
  //       key={index}
  //       className={"todo-row" + todo.isComplete ? "complete" : ""}
  //     >
  //       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
  //         {todo.text}
  //       </div>
  //     </div>
  //   );
  // });
}

export default Todo;
