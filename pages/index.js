import React from "react";
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import TaskBoard from "../components/TaskBoard/TaskBoard";
import css from "../styles/index.module.css";

export default function Dashboard({ toggleColorMode }) {
  const [taskComplete, setTaskComplete] = useState(0);
  const [todos, setTodos] = useState([]);
  console.log(todos);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://socfinalproject.herokuapp.com/activities`
      );
      const data = await response.json();
      console.log(data);
      setTodos(data.payload);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ullam
        laborum deserunt consequatur, assumenda quos. Aspernatur placeat ex
        error provident unde velit temporibus libero. Quaerat, temporibus
        tenetur dignissimos perspiciatis libero quasi! Eaque maxime fugiat
        nesciunt accusamus dolorum eligendi maiores reprehenderit quibusdam
        voluptate, aperiam, quia ad dolore. Provident minima similique aliquid?
      </p>
      <button onClick={toggleColorMode}>Light/dark mode</button>
      <input type="number" onChange={(e) => setTaskComplete(e.target.value)} />
      <div className={css.container}>
        <div className="Progress-Bar">
          <ProgressBar TaskPercent={taskComplete} />
        </div>
        <div className="Taskboard">
          <TaskBoard todos={todos} />
        </div>
      </div>
    </div>
  );
}

/* Home page components:
navBar
title that changes with time of day 
button for light and dark mode 
container
    -daily progress bar 
        -title 
        - bar
    *how to get progress bar starting on 0% with 0 tasks
  container
    - tasks
  add tasks button
  */
