import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import css from './calendar.module.css'
import { useTheme } from '@mui/styles'
import { Typography } from '@mui/material'

function Calendar({ setInfo, Info }) {
    const theme = useTheme()

    function handleChange(newValue) {
        setInfo({ ...Info, date: newValue })
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '10px',
            }}
        >
            <Typography variant="h6" textAlign="center">
                What day are you planning?
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    InputProps={{
                        classes: { MuiCalendarPicker: css.datePicker },
                    }}
                    value={Info.date}
                    inputFormat="dd/MM/yyyy"
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

export default Calendar
