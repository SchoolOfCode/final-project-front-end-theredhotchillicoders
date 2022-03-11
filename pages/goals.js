import ActivityButton from '../components/ActivityButton/ActivityButton.js'
import TimeButton from '../components/TimeButton/TimeButton.js'
import { useState } from 'react'
import { Grid, Button } from '@mui/material'
import { dummyGoals, times } from '../DummyData/DummyGoalsData'
import Calendar from '../components/Calendar/Calendar.js'
import AddYourOwn from '../components/AddYourOwn/AddYourOwn'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material'
import Head from 'next/head'

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

    return (
        <div>
            <Head>
                <title>Life Lifter - Goals</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div
                className="header goals-header"
                title="Goals"
                aria-label="Goals banner"
            />
            <div className="activity-calendar">
                <Calendar setInfo={setGoalsInfo} Info={GoalsInfo} />
            </div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
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
            <div className="backBtn">
                <Button
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
        </div>
    )
}

export default Goals
