import { React, useState } from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

export default function TaskCalendar({ taskDate, setTaskDate }) {
    function handleChange(newValue) {
        setTaskDate(newValue)
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="What day are you planning?"
                value={taskDate}
                onChange={(newValue) => {
                    handleChange(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}
