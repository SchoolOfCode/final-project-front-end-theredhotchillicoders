import ActivityButton from '../components/ActivityButton/ActivityButton.js'
import TimeButton from '../components/TimeButton/TimeButton.js'
import { useState } from 'react'
import Link from 'next/link'
import { Typography, Grid, Button } from '@mui/material'
import { dummyGoals, times } from '../DummyData/DummyGoalsData'
import Calendar from '../components/Calendar/Calendar.js'
import AddYourOwn from '../components/AddYourOwn/AddYourOwn'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material'

const date = new Date()
const Goals = ({ user }) => {
    const router = useRouter()
    const theme = useTheme()
    const [GoalsInfo, setGoalsInfo] = useState({
        date: date,
        title: '',
        category: 'myGoals',
        description: '',
        userid: user.uid,
    })

    // function getTime(e) {
    //   setFitnessInfo({ ...fitnessInfo, duration: e.target.innerHTML });
    //   sendPostRequest(fitnessInfo);
    // }

    return (
        <div>
            <div className="header goals-header" />
            <div className="activity-calander">
                <Calendar setInfo={setGoalsInfo} Info={GoalsInfo} />
            </div>
            <Grid container>
                {GoalsInfo.title === '' ? (
                    <AddYourOwn
                        info={GoalsInfo}
                        setInfo={setGoalsInfo}
                        id="myGoals"
                        text="Custom Goal"
                    />
                ) : null}

                {GoalsInfo.title === ''
                    ? dummyGoals.map((goals) => (
                          <ActivityButton
                              title={goals.title}
                              category={goals.category}
                              description={goals.description}
                              key={goals.title}
                              setInfo={setGoalsInfo}
                              image={goals.image}
                              Info={GoalsInfo}
                              // date={date}
                          />
                      ))
                    : times.map((time, index) => (
                          <TimeButton
                              time={time}
                              key={index}
                              setInfo={setGoalsInfo}
                              Info={GoalsInfo}
                              category="myGoals"
                          />
                      ))}
            </Grid>

            <Button
                className="backBtn"
                variant="outlined"
                onClick={() => {
                    if (GoalsInfo.title === '') {
                        router.push('/')
                    } else {
                        setGoalsInfo({
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

export default Goals
