import { useState } from "react";
import css from "./addTaskButton.module.css";

const AddTask = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <button className={css.taskButton}>+ Add Task</button>
      {/* <input
                type='text'
                placeholder="Add Task" 
                value = {text}
                onChange={(e) => setText(e.target.value)}
                /> */}
    </div>
  );
};

export default AddTask;
