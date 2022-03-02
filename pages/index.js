import React from "react";
import { useEffect, useState } from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import TaskBoard from "../components/TaskBoard/TaskBoard";
import css from "../styles/index.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { getAuth, signOut } from "firebase/auth";

export default function Dashboard({
  toggleColorMode,
  isLoggedIn,
  setIsLoggedIn,
  user,
  icon,
}) {
  const router = useRouter();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("all the data on page load", todos);
    async function fetchData() {
      let authToken = sessionStorage.getItem("Auth Token");
      const response = await fetch(
        `https://socfinalproject.herokuapp.com/activities/user`,
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
    let authToken = sessionStorage.getItem("Auth Token");
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
          Authorization: "Bearer " + authToken,
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
      <button onClick={toggleColorMode} className={css.modeButton}>
        {icon}
      </button>
      <div className={css.container}>
        <div className={css.taskboard}>
          {todos.length > 0 ? (
            <TaskBoard todos={todos} deleteRequest={deleteRequest} />
          ) : null}
        </div>
        <div className={css.progressBar}></div>
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
