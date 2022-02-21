import React from "react";
import css from "./Taskboard.module.css";

const todos = [{ title: "hello" }, { title: "cook" }];

function Todo({ todo }) {
  return <div className="todo">{todo.title}</div>;
}

export default function TaskBoard() {
  return (
    <div className={css.app}>
      <div className={css.todoList}>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}
