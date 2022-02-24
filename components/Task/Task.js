import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import css from "./task.module.css";

export default function Todo({ todo }) {
    return (
      <div className={css.todo}>
        {todo.title}
        <div>
          <input className={css.checkbox} type="checkbox" />
          <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="small"  />
          </IconButton>
        </div>
      </div>
    );
  }

  //delete selected todo 
  // map over todos
  // select todos by ID 
  // delete by slice or filter 

// async function handleDelete(todos , setTodos, index) {
//      await setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
// }
