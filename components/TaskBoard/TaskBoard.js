import React from "react";
import css from "./Taskboard.module.css";
import AddTask from "../addTaskButton/addTask.js";
import Todo from "../Task/Task"


export default function TaskBoard({ todos , deleteItem, deleteRequest}) {
  console.log(todos);
  if (todos.length > 0) {
    return (
      <div className={css.taskboard}>
        <div className={css.todoList}>
          {todos.map((todo, index ) => {
            function deleteTaskOnClick(){
              deleteItem(index)
              deleteRequest(todo.id)}
            
            return (<Todo 
              key={index}
              todo={todo}
              id={todo.id} 
              deleteTaskOnClick={deleteTaskOnClick}
              />
          )})}
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