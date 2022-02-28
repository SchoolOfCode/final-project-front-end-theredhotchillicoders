import React from "react";
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import TaskBoard from "../components/TaskBoard/TaskBoard";
import css from "../styles/index.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";
import {Button } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';


export default function Dashboard({
  toggleColorMode,
  isLoggedIn,
  setIsLoggedIn,
  user,
  icon
}) {
  const router = useRouter();
  const [taskComplete, setTaskComplete] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let authToken = sessionStorage.getItem("Auth Token");
      const response = await fetch(
        `https://socfinalproject.herokuapp.com/activities`,
        {
          headers: {
            Authorization: "Bearer " + authToken,
          },
        }
      );
      const data = await response.json();
      console.log("fetched data", data);
      setTodos(data.payload);
    }
    if (user.accessToken) {
      fetchData();
    }
  }, [user]);

  function deleteItem(findIndex) {
    setTodos([...todos.slice(0, findIndex), ...todos.slice(findIndex + 1)]);
  }

  //   useEffect(() => {
  //     // DELETE request using fetch with async/await
  //         async function deleteRequest(id) {
  //         await fetch(`https://socfinalproject.herokuapp.com/activities/:${id}`, { method: 'DELETE' });
  //         //setStatus('Delete successful');
  //     }

  //     deleteRequest(id);
  // }, [todos]);

  async function deleteRequest(id) {
    console.log("delete this ", id, "here");
    // Default options are marked with *
    const response = await fetch(
      `https://socfinalproject.herokuapp.com/activities/${id}`,
      {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        //redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
      }
    );
    let data = await response.json();
    console.log(response, data);
    // parses JSON response into native JavaScript objects
  }

  function handleLogout() {
    sessionStorage.removeItem("Auth Token");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        window.location.reload(false);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    setIsLoggedIn(false);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={toggleColorMode}>{icon}</Button>
      <input type="number" onChange={(e) => setTaskComplete(e.target.value)} />
      <div className={css.container}>
        <div className={css.taskboard}>
          {todos ? (
            <TaskBoard
              todos={todos}
              deleteItem={deleteItem}
              deleteRequest={deleteRequest}
            />
          ) : null}
        </div>
        <div className={css.progressBar}>
          <ProgressBar TaskPercent={taskComplete} />
        </div>
      </div>
      {user ? <button onClick={handleLogout}>Logout</button> : null}
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
