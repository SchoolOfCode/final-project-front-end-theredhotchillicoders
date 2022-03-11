import React from 'react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getAuth, updateProfile } from 'firebase/auth'
import { Grid } from '@mui/material'
import Charts from '../components/Charts/Charts'
import css from '../styles/progress.module.css'
import Head from 'next/head'
import Greeting from '../components/Greeting/Greeting.js'

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

export default function Progress({ user }) {
    const [todos, setTodos] = useState([])

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

    return (
        <div>
            <Head>
                <title>Life Lifter - Progress Page</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <Greeting userName={user.displayName} />

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
                style={{ flexDirection: 'row-reverse' }}
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
                <Grid item align="center">
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
