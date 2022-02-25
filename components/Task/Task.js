import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import css from "./task.module.css";

export default function Todo({todo , id , deleteTaskOnClick}) {
   let category = todo.category
    
    return (
      <div className={css.todo} id={category}>
        {todo.title}
        <div>
          <input className={css.checkbox} type="checkbox" />
          <IconButton aria-label="delete" size="small" onClick={deleteTaskOnClick}>
          <DeleteIcon fontSize="small"  />
          </IconButton>
        </div>
      </div>
    );
  }


 
