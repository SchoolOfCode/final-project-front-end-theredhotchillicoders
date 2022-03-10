import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { DoughnutChart } from '../Doughnut/Doughnut'
import css from './Charts.module.css'
import { Typography, Grid } from '@mui/material'

//Get today's date
const today = moment().format('DD-MM-YYYY')

//Check what day it is (0 - Sunday, 1 - Monday...)
const day = moment().day()

//Numbers for past 6 days
const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

//String format dates for past 7 days
const daysAgo = [
    {
        date: moment().subtract(0, 'days').format('DD-MM-YYYY'),
        day: 'Today',
    },
    {
        date: moment().subtract(1, 'days').format('DD-MM-YYYY'),
        day: 'Yesterday',
    },
    {
        date: moment().subtract(2, 'days').format('DD-MM-YYYY'),
        day: moment().subtract(2, 'days').format('dddd'),
    },
    {
        date: moment().subtract(3, 'days').format('DD-MM-YYYY'),
        day: moment().subtract(3, 'days').format('dddd'),
    },
    {
        date: moment().subtract(4, 'days').format('DD-MM-YYYY'),
        day: moment().subtract(4, 'days').format('dddd'),
    },
    {
        date: moment().subtract(5, 'days').format('DD-MM-YYYY'),
        day: moment().subtract(5, 'days').format('dddd'),
    },
    {
        date: moment().subtract(6, 'days').format('DD-MM-YYYY'),
        day: moment().subtract(6, 'days').format('dddd'),
    },
]

export default function Charts({ data }) {
    //Format all the dates in the object
    const formattedData = data.map((activity) => {
        const newDate = moment(activity.date).format('DD-MM-YYYY')
        const day = moment(activity.date).format()
        console.log('day', day)
        return {
            ...activity,
            date: newDate,
            day: day,
        }
    })
    //Look at each past day and work out how many tasks were completed
    function calculateProgress(date) {
        //Declare result object
        const result = {
            fitnessToDo: 0,
            fitnessComplete: 0,
            recipesToDo: 0,
            recipesComplete: 0,
            goalsToDo: 0,
            goalsComplete: 0,
            wellbeingToDo: 0,
            wellbeingComplete: 0,
            totalTasks: 0,
            totalComplete: 0,
        }
        //Calculate the completed percent for date
        //Count total number of tasks
        formattedData.forEach((activity) => {
            if (activity.date === date) {
                result.totalTasks++
                if (activity.category === 'fitness') {
                    result.fitnessToDo++
                    if (activity.iscomplete === true) {
                        result.fitnessComplete++
                        result.totalComplete++
                    }
                }
                if (activity.category === 'recipe') {
                    result.recipesToDo++
                    if (activity.iscomplete === true) {
                        result.recipesComplete++
                        result.totalComplete++
                    }
                }
                if (activity.category === 'Wellbeing') {
                    result.wellbeingToDo++
                    if (activity.iscomplete === true) {
                        result.wellbeingComplete++
                        result.totalComplete++
                    }
                }
                if (activity.category === 'myGoals') {
                    result.goalsToDo++
                    if (activity.iscomplete === true) {
                        result.goalsComplete++
                        result.totalComplete++
                    }
                }
            }
        })
        return result
    }
    //Display data
    return (
        <section className={css.weeklyStats}>
            <Typography
                variant="h2"
                textAlign="center"
                style={{
                    marginTop: '1em',
                    fontWeight: 500,
                    fontSize: '1.5rem',
                    fontFamily: 'Anton',
                }}
            >
                Weekly Progress:
            </Typography>
            <Grid
                container
                style={{
                    flexDirection: 'row', //Should this be reverse?
                    justifyContent: 'center',
                    height: '200px',
                }}
            >
                {/* <div className={css.chartArea}> */}
                {data.length > 0
                    ? daysAgo.map((dayago, index) => {
                          const dataForChart = calculateProgress(dayago.date)
                          dataForChart.day = dayago.day
                          return (
                              <Grid
                                  key={index}
                                  item
                                  xs={3}
                                  sm={3}
                                  md={1}
                                  p={0}
                                  sx={{
                                      m: 'auto',
                                  }}
                                  align="center"
                              >
                                  <div className={css.chartDay}>
                                      <label>{dayago.day}</label>
                                      <div className={css.chartContainer}>
                                          <DoughnutChart
                                              activityData={dataForChart}
                                          />
                                      </div>
                                  </div>
                              </Grid>
                          )
                      })
                    : null}
                {/* </div> */}
            </Grid>
        </section>
    )
}
