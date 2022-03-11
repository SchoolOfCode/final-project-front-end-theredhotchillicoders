import { React } from 'react'
import { TextField, Typography } from '@mui/material'
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
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                width: '100%',
                alignItems: 'center',
            }}
        >
            <Typography
                variant="h2"
                style={{
                    margin: '0',
                    fontWeight: '500',
                    fontSize: '1.15rem',
                    lineHeight: '1.6',
                    letterSpacing: '0.0075em',
                }}
            >
                Check your schedule
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    InputProps={{
                        classes: { MuiCalendarPicker: css.datePicker },
                    }}
                    value={taskDate}
                    inputFormat="dd/MM/yyyy"
                    onChange={(newValue) => {
                        handleChange(newValue)
                    }}
                    renderInput={(params) => (
                        <TextField
                            sx={{
                                backgroundColor: theme.palette.text.primary,
                                color: theme.palette.text.secondary,
                            }}
                            {...params}
                        />
                    )}
                />
            </LocalizationProvider>
        </div>
    )
}
