import React from "react";
import css from "./Taskboard.module.css";
import AddTask from "../addTaskButton/addTask.js";
import Todo from "../Task/Task"

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
      <div className={css.checkboxDelete}>
        <input className={css.checkbox} type="checkbox" />
        <button>Remove</button>
      </div>
    </div>
  );
}

export default function TaskBoard({ todos }) {
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

/*
 function handleDelete(i) {
    console.log("%chandle delete", "color:lightblue");
    setToDos([...toDos.slice(0, i), ...toDos.slice(i + 1)]);
  } */