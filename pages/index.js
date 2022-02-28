import React from "react";
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import TaskBoard from "../components/TaskBoard/TaskBoard";
import css from "../styles/index.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Dashboard({
  toggleColorMode,
  isLoggedIn,
  setIsLoggedIn,
  user,
}) {
  const router = useRouter();
  const [taskComplete, setTaskComplete] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let authToken = sessionStorage.getItem("Auth Token");
      console.log(authToken);
      const response = await fetch(
        `https://socfinalproject.herokuapp.com/activities`,
        {
          headers: {
            Authorization: "Bearer " + authToken,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setTodos(data.payload);
    }
    console.log(user);
    if (user.accessToken) {
      fetchData();
    }
  }, [user.accessToken]);

  function handleLogout() {
    sessionStorage.removeItem("Auth Token");
    setIsLoggedIn(false);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={toggleColorMode}>Light/dark mode</button>
      <input type="number" onChange={(e) => setTaskComplete(e.target.value)} />
      <div className={css.container}>
        <div className={css.taskboard}>
          {todos ? <TaskBoard todos={todos} /> : null}
        </div>
        <div className={css.progressBar}>
          <ProgressBar TaskPercent={taskComplete} />
        </div>
      </div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link href="/login">
          <a>
            <button>Login</button>
          </a>
        </Link>
      )}
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
