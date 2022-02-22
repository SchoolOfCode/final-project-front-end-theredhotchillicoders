import React from "react";
import css from "./Taskboard.module.css";
import AddTask from "../addTaskButton/addTask.js";

// const todos = [
//   { title: "hello" },
//   { title: "cook" },
//   { title: "clean" },
//   { title: "wash" },
//   { title: "run" },
//   { title: "run" },
// ];

function Todo({ todo }) {
  return (
    <div className={css.todo}>
      {todo.title}
      <input className={css.checkbox} type="checkbox" />
    </div>
  );
}

export default function TaskBoard({ todos }) {
  console.log(todos);
  if (todos.length > 0) {
    return (
      <div className={css.taskboard}>
        <div className={css.todoList}>
          {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} />
          ))}
        </div>
        <AddTask />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}
