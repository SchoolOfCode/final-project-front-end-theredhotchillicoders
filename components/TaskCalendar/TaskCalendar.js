import { React, useState } from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import css from './taskCalendar.module.css'
import { useTheme } from '@mui/styles'

export default function TaskCalendar({ taskDate, setTaskDate }) {
    const theme = useTheme()
    function handleChange(newValue) {
        setTaskDate(newValue)
    }
    return (
        <div className={css.taskCalendar}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    InputProps={{
                        classes: { MuiCalendarPicker: css.datePicker },
                    }}
                    value={taskDate}
                    onChange={(newValue) => {
                        handleChange(newValue)
                    }}
                    renderInput={(params) => (
                        <TextField
                            sx={{
                                backgroundColor: theme.palette.text.primary,
                            }}
                            {...params}
                        />
                    )}
                />
            </LocalizationProvider>
        </div>
    )
}
