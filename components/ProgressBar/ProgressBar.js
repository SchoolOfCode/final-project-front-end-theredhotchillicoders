import React from 'react'
import { useState, useEffect } from 'react'
import {
    LinearProgress,
    Box,
    Typography,
    linearProgressClasses,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material'
import confetti from 'canvas-confetti'

const green = '#8fd89b'
const white = '#ffffff'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: white,
        borderColor: theme.palette.text.primary,
        borderStyle: 'solid',
        borderWidth: '1px',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: green,
    },
}))
/*
tasks are filtered to the day
when task is updated to isComplete:true we do a post/patch request to the database
stored in a usestate to measure how many tasks are complete and the length of the todo array 
(will also be affected by if someones deleted a task)
multiple usestates? 
progress bar needs to work out the percentage (completed % no. of tasks * 100)
fetch data, look at payload.isComplete amount vs payload.length
send the result number down as a varible to the progress bar
how is the progress bar going to update? useState and useEffect
 */

function ProgressBar({ filteredToDos }) {
    const [percentComplete, setPercentComplete] = useState(0)

    let theme = useTheme()

    //filtered todos is the tasks that needed to be completed on the day, for each todo is complete the count will increase.
    //count is divided by filteredtodos length and * 100 to work out the percentage.

    useEffect(() => {
        let count = 0
        filteredToDos.forEach((element) => {
            if (element.iscomplete === true) {
                count++
            }
        })
        let numberofTasks = (count / filteredToDos.length).toFixed(2) * 100
        numberofTasks = Math.round(numberofTasks)
        setPercentComplete(numberofTasks)
    }, [filteredToDos])

    useEffect(() => {
        if (percentComplete === 100) {
            const colors = [
                '#fdf7ec',
                '#0a2342',
                '#f58452',
                '#0f7173',
                '#9996d9',
                '#9ad175',
            ]
            confetti({
                particleCount: 200,
                colors: colors,
                spread: 200,
            })
        }
    }, [percentComplete])

    return (
        <Box
            padding="30px"
            borderRadius="10px"
            marginTop="1rem"
            marginLeft="auto"
            marginRight="auto"
            sx={{
                backgroundColor: theme.palette.text.secondary,
                boxShadow: '2px 2px 10px black',
                border: `solid 2px ${theme.palette.text.primary}`,
            }}
        >
            <h3
                style={{
                    margin: '1px',
                    fontSize: '1rem',
                    marginLeft: '24px',
                }}
            >
                Your Daily Progress:
            </h3>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '90%', mr: 1, ml: 3 }}>
                    <BorderLinearProgress
                        variant="determinate"
                        value={percentComplete}
                        aria-label="Daily progress bar"
                        style={{
                            height: '20px',
                        }}
                    />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.primary">
                        {percentComplete}%
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ProgressBar
