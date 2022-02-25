import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import css from "./task.module.css";

export default function Todo({ todo }) {
  return (
    <div className={css.todo}>
      {todo.title}
      <div>
        <input className={css.checkbox} type="checkbox" />
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}

// onClick
// .map(objectOfInfo) < you will have an Id that you will pass to your onClick={()=>imAfunctionThatRemovesById( objectOfInfo.id )}
// ^^ that will call a function and remove the datafrom your backend where you have a route of
// "delete from table where id=$1"

// //delete selected todo
// // map over todos
// // select todos by ID
// delete by slice or filter

// async function handleDelete(todos , setTodos, index) {
//      await setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
// }
