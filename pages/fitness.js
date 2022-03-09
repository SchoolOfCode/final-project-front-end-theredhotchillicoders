import ActivityButton from '../components/ActivityButton/ActivityButton.js'
import TimeButton from '../components/TimeButton/TimeButton.js'
import { useState } from 'react'
import Link from 'next/link'
import { Box, Typography, Grid, Button } from '@mui/material'
import { dummyFitness, times } from '../DummyData/DummyFitnessData.js'
import Calendar from '../components/Calendar/Calendar.js'
import AddYourOwn from '../components/AddYourOwn/AddYourOwn.js'
import Router, { useRouter } from 'next/router'
import { useTheme } from '@mui/styles'
import Head from 'next/head'

const date = new Date()
const Fitness = ({ user }) => {
    const theme = useTheme()
    const router = useRouter()
    const [fitnessInfo, setFitnessInfo] = useState({
        date: date,
        title: '',
        category: '',
        description: '',
        userid: user.uid,
    })

    // function getTime(e) {
    //   setFitnessInfo({ ...fitnessInfo, duration: e.target.innerHTML });
    //   sendPostRequest(fitnessInfo);
    // }

    return (
        <div>
        <Head>
        <title>Life Lifter - Fitness</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
            <div className="header fit-header" />
            <div className="activity-calendar">
                <Calendar setInfo={setFitnessInfo} Info={fitnessInfo} />
            </div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {fitnessInfo.title === '' ? (
                    <AddYourOwn
                        info={fitnessInfo}
                        setInfo={setFitnessInfo}
                        id="fitness"
                        text="Custom Goal"
                    />
                ) : null}
                {fitnessInfo.title === ''
                    ? dummyFitness.map((exercise) => (
                          <ActivityButton
                              title={exercise.title}
                              category={exercise.category}
                              description={exercise.description}
                              key={exercise.title}
                              setInfo={setFitnessInfo}
                              image={exercise.image}
                              Info={fitnessInfo}
                              // date={date}
                          />
                      ))
                    : times.map((time, index) => (
                          <TimeButton
                              time={time}
                              key={index}
                              setInfo={setFitnessInfo}
                              Info={fitnessInfo}
                              category="fitness"
                          />
                      ))}
            </Grid>

            <Button
                className="backBtn"
                variant="outlined"
                onClick={() => {
                    if (fitnessInfo.title === '') {
                        router.push('/')
                    } else {
                        setFitnessInfo({
                            date: date,
                            title: '',
                            category: '',
                            description: '',
                            userid: user.uid,
                        })
                    }
                }}
                style={{
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.text.primary,
                }}
            >
                Back
            </Button>
        </div>
      
    )
}

export default Fitness

// create our own array of objects with the exercise information in.
// We will map over this array to create our tiles.
// The tile will be styled in it's own component.
// click the tile then this will hide the exercises & reveal the times.
// somehow we want to save the information on each button.
// This information will be saved in a use state object will be posted to our database.... and fetched when we load the daily page.

//
