import React from 'react'
import { useEffect, useState, useContext } from 'react'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import TaskBoard from '../components/TaskBoard/TaskBoard'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getAuth, signOut, updateProfile } from 'firebase/auth'
import { Modal, Typography, Grid } from '@mui/material'
import { style } from '@mui/system'
import RandomQuote from '../components/RandomQuote/RandomQuote'
import TaskCalendar from '../components/TaskCalendar/TaskCalendar'
import Charts from '../components/Charts/Charts'
import css from '../styles/progress.module.css'

import Head from 'next/head'

import Greeting from '../components/Greeting/Greeting.js'

// import '@fontsource/anton' // Defaults to weight 400.

import { pageWrapper } from './_app'

const auth = getAuth()
const date = new Date()

async function updateUsername(newUsername, setDisplayUsername) {
    setDisplayUsername(newUsername)
    updateProfile(auth.currentUser, {
        displayName: newUsername,
    })
        .then(() => {
            // Profile updated!
            // ...
        })
        .catch((error) => {
            // An error occurred
            // ...
        })
}

export default function Progress({
    toggleColorMode,
    isLoggedIn,
    setIsLoggedIn,
    user,
    icon,
}) {
    const router = useRouter()

    // const [ taskDate, setTaskDate ] = useState(new Date());
    const [todos, setTodos] = useState([])
    const [username, setUsername] = useState('')
    const [displayUsername, setDisplayUsername] = useState(user.displayName)
    // const [ modalOpen, setModalOpen ] = useState(false);
    // const handleModalOpen = () => setModalOpen(true);
    // const handleModalClose = () => setModalOpen(false);
    // let { pageState, setPageState } = useContext(pageWrapper);

    useEffect(() => {
        async function fetchData() {
            let authToken = sessionStorage.getItem('Auth Token')
            const response = await fetch(
                `https://socfinalproject.herokuapp.com/activities/user`,
                {
                    headers: {
                        Authorization: 'Bearer ' + authToken,
                    },
                }
            )
            const data = await response.json()
            console.log('fetched data', data)
            if (data.payload) {
                setTodos(data.payload)
                return data
            }
        }
        const data = fetchData()
        return data
    }, [user])

    //   useEffect(() => {
    //     // DELETE request using fetch with async/await
    //         async function deleteRequest(id) {
    //         await fetch(`https://socfinalproject.herokuapp.com/activities/:${id}`, { method: 'DELETE' });
    //         //setStatus('Delete successful');
    //     }

    //     deleteRequest(id);
    // }, [todos]);

    // async function deleteRequest(id) {
    // 	console.log('delete this ', id, 'here');
    // 	let authToken = sessionStorage.getItem('Auth Token');
    // 	// Default options are marked with *
    // 	const response = await fetch(`https://socfinalproject.herokuapp.com/activities/${id}`, {
    // 		method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    // 		mode: 'cors', // no-cors, *cors, same-origin
    // 		// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    // 		// credentials: 'same-origin', // include, *same-origin, omit
    // 		headers: {
    // 			'Content-Type': 'application/json',
    // 			Authorization: 'Bearer ' + authToken
    // 			// 'Content-Type': 'application/x-www-form-urlencoded',
    // 		}

    //redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //body: JSON.stringify(data) // body data type must match "Content-Type" header
    // 	});
    // 	let data = await response.json();
    // 	console.log(response, data);
    // 	// parses JSON response into native JavaScript objects
    // }

    // function handleLogout() {
    // 	sessionStorage.removeItem('Auth Token');
    // 	const auth = getAuth();
    // 	signOut(auth)
    // 		.then(() => {
    // 			// Sign-out successful.
    // 			window.location.reload(false);
    // 		})
    // 		.catch((error) => {
    // 			// An error happened.
    // 			console.log(error);
    // 		});
    // 	setIsLoggedIn(false);
    // }

    return (
        <div>
            <Head>
                <title>Life Lifter - Progress Page</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <Greeting userName={displayUsername} />

            {/* <h2 className={css.progressTitle}>Your progress </h2> */}

            <Charts data={todos} />

            <h3 className={css.progressSubtitle}>Completed Tasks</h3>

            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 2, md: 4 }}
                justify="center"
                align="center"
                width="80%"
                sx={{ justifyContent: 'center' }}
            >
                <Grid item>
                    <div className="keySquare" id="fitness" />
                    <p> Fitness</p>
                </Grid>
                <Grid item>
                    <div className="keySquare" id="recipe" />
                    <p> Recipes</p>
                </Grid>
                <Grid item>
                    <div className="keySquare" id="myGoals" />
                    <p> Goals</p>
                </Grid>
                <Grid item>
                    <div className="keySquare" id="Wellbeing" />
                    <p> Wellbeing</p>
                </Grid>
            </Grid>

            <h3 className={css.progressSubtitle}>Missed Tasks</h3>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 2, sm: 2, md: 4 }}
                sx={{ justifyContent: 'center' }}
            >
                <Grid item justify="center" align="center">
                    <div className="keySquare fitnessBorder" />
                    <p> Fitness</p>
                </Grid>
                <Grid item>
                    <div className="keySquare recipeBorder" />
                    <p> Recipes</p>
                </Grid>
                <Grid item justify="center" align="center">
                    <div className="keySquare myGoalsBorder" />
                    <p> Goals</p>
                </Grid>
                <Grid item>
                    <div className="keySquare wellbeingBorder" />
                    <p> Wellbeing</p>
                </Grid>
            </Grid>
        </div>
    )
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
