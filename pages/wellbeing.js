import ActivityButton from '../components/ActivityButton/ActivityButton.js'
import TimeButton from '../components/TimeButton/TimeButton.js'
import { useState } from 'react'
import Link from 'next/link'
import { Box, Typography, Grid, Button } from '@mui/material'
import { dummyFitness, times } from '../DummyData/DummyFitnessData.js'
import Calendar from '../components/Calendar/Calendar.js'
import { dummyWellbeing } from '../DummyData/DummyWellbeingData.js'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material'

const date = new Date()
const Wellbeing = ({ user }) => {
    const router = useRouter()
    const theme = useTheme()
    const [wellbeingInfo, setWellbeingInfo] = useState({
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
    let color = 'wellbeing'

    return (
        <div>
            <div className="header wellbeing-header" />
            <div className="activity-calander">
                <Calendar setInfo={setWellbeingInfo} Info={wellbeingInfo} />
            </div>
            <Grid container>
                {wellbeingInfo.title === ''
                    ? dummyWellbeing.map((wellbeing) => (
                          <ActivityButton
                              title={wellbeing.title}
                              category={wellbeing.category}
                              description={wellbeing.description}
                              key={wellbeing.title}
                              setInfo={setWellbeingInfo}
                              image={wellbeing.image}
                              Info={wellbeingInfo}
                              // date={date}
                          />
                      ))
                    : times.map((time, index) => (
                          <TimeButton
                              time={time}
                              key={index}
                              setInfo={setWellbeingInfo}
                              Info={wellbeingInfo}
                              category="Wellbeing"
                          />
                      ))}
            </Grid>

            <Button
                className="backBtn"
                variant="outlined"
                onClick={() => {
                    if (wellbeingInfo.title === '') {
                        router.push('/')
                    } else {
                        setWellbeingInfo({
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

export default Wellbeing

// create our own array of objects with the exercise information in.
// We will map over this array to create our tiles.
// The tile will be styled in it's own component.
// click the tile then this will hide the exercises & reveal the times.
// somehow we want to save the information on each button.
// This information will be saved in a use state object will be posted to our database.... and fetched when we load the daily page.

//
