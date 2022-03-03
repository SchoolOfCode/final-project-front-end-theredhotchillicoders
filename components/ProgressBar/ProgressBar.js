import React from 'react'
import { useState, useEffect } from 'react'
import css from './ProgressBar.module.css'
import {
    LinearProgress,
    Box,
    Typography,
    linearProgressClasses,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const green = '#8fd89b'
const white = '#ffffff'
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: white,
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

    console.log('percent', percentComplete)
    useEffect(() => {
        let count = 0
        filteredToDos.forEach((element) => {
            if (element.iscomplete === true) {
                count++
            }
        })
        let numberofTasks = (count / filteredToDos.length).toFixed(2) * 100

        setPercentComplete(numberofTasks)
    }, [filteredToDos])

    {
        return (
            <Box
                backgroundColor="#f5f0e669"
                border="1px solid rgba(0, 0, 0, 0.151)"
                padding="30px"
                borderRadius="20px"
                marginTop="1rem"
                marginLeft="auto"
                marginRight="auto"
            >
                <h4 style={{ margin: '1px' }}>Your Daily Progress:</h4>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '90%', mr: 5, ml: 5 }}>
                        <BorderLinearProgress
                            variant="determinate"
                            value={percentComplete}
                            style={{
                                height: '20px',
                            }}
                        />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                        <Typography variant="body2" color="text.secondary">
                            {percentComplete}%
                        </Typography>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default ProgressBar
