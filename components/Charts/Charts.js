import React from 'react'
import moment from 'moment'
import { DoughnutChart } from '../Doughnut/Doughnut'
import css from './Charts.module.css'

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

//String format dates for past 6 days
const daysAgo = [
    moment().subtract(1, 'days').format('DD-MM-YYYY'),
    moment().subtract(2, 'days').format('DD-MM-YYYY'),
    moment().subtract(3, 'days').format('DD-MM-YYYY'),
    moment().subtract(4, 'days').format('DD-MM-YYYY'),
    moment().subtract(5, 'days').format('DD-MM-YYYY'),
    moment().subtract(6, 'days').format('DD-MM-YYYY'),
]

export default function Charts({ data }) {
    //Format all the dates in the object
    const formattedData = data.map((activity) => {
        const newDate = moment(activity.date).format('DD-MM-YYYY')
        return {
            ...activity,
            date: newDate,
        }
    })
    //Look at each past day and work out how many tasks were completed
    function calculateProgress(date) {
        //Declare result object
        const result = {
            date: date,
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
        <section className={css.chartArea}>
            Progress:
            {/* <DoughnutChart></DoughnutChart> */}
            <div className={css.chartContainer}>
                {data.length > 0
                    ? daysAgo.map((dayago) => {
                          const dataForChart = calculateProgress(dayago)
                          return (
                              <DoughnutChart
                                  key={dayago}
                                  activityData={dataForChart}
                              ></DoughnutChart>
                          )
                      })
                    : null}
            </div>
        </section>
    )
}
