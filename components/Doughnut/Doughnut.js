import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export function DoughnutChart({ activityData }) {
    const day = activityData.day
    const incompleteTasks = activityData.totalTasks - activityData.totalComplete
    const incompleteFitness =
        activityData.fitnessToDo - activityData.fitnessComplete
    const incompleteRecipes =
        activityData.recipesToDo - activityData.recipesComplete
    const incompleteGoals = activityData.goalsToDo - activityData.goalsComplete
    const incompleteWellbeing =
        activityData.wellbeingToDo - activityData.wellbeingComplete
    const doughnutData = {
        labels: [
            'Fitness tasks completed',
            'Recipes completed',
            'Goals completed',
            'Wellbeing tasks completed',
            'Incomplete Tasks',
            'Incomplete fitness tasks',
        ],
        datasets: [
            {
                label: `Progress on ${day}`,
                data: [
                    activityData.fitnessComplete,
                    incompleteFitness,
                    activityData.recipesComplete,
                    incompleteRecipes,
                    activityData.goalsComplete,
                    incompleteGoals,
                    activityData.wellbeingComplete,
                    incompleteWellbeing,
                ],
                backgroundColor: [
                    '#f58452',
                    'hsla(18, 89%, 64%, 0)',
                    '#0f7173',
                    'hsla(181, 77%, 25%, 0)',
                    '#9ad175',
                    'hsla(96, 50%, 64%, 0)',
                    '#9996d9',
                    'hsla(243, 47%, 72%, 0)',
                    '#6d6d6d',
                ],
                borderColor: [
                    '#f58452',
                    '#f58452',
                    '#0f7173',
                    '#0f7173',
                    '#9ad175',
                    '#9ad175',
                    '#9996d9',
                    '#9996d9',
                ],
                borderWidth: [3, 3, 3, 3, 3, 3, 3, 3],
            },
        ],
    }
    const emptyDayData = {
        labels: ['No activities completed'],
        datasets: [
            {
                label: `Progress on ${day}`,
                data: [100],
                backgroundColor: ['#6d6d6d'],
                borderColor: ['#6d6d6d'],
                borderWidth: 1,
            },
        ],
    }
    const options = {
        plugins: {
            legend: {
                display: false,
                title: {
                    display: true,
                    text: `${day}`,
                },
            },
            tooltip: {
                enabled: false,
            },
        },
    }

    return (
        <>
            {activityData.totalComplete > 0 ? (
                <>
                    <Doughnut data={doughnutData} options={options} />
                </>
            ) : (
                <Doughnut data={emptyDayData} options={options} />
            )}
        </>
    )
}
