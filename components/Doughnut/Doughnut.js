import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export function DoughnutChart({ activityData }) {
    console.log(activityData)
    const doughnutData = {
        labels: ['Fitness', 'Recipes', 'Goals', 'Wellbeing'],
        datasets: [
            {
                label: '# of Votes',
                data: [
                    activityData.fitnessComplete,
                    activityData.recipesComplete,
                    activityData.goalsComplete,
                    activityData.wellbeingComplete,
                ],
                backgroundColor: ['#f58452', '#0f7173', '#9ad175', '#9996d9'],
                borderColor: ['#f58452', '#0f7173', '#9ad175', '#9996d9'],
                borderWidth: 1,
            },
        ],
    }

    return (
        <>
            {activityData.totalComplete > 0 ? (
                <Doughnut
                    data={doughnutData}
                    style={{ width: '10em', height: '10em' }}
                />
            ) : null}
        </>
    )
}
