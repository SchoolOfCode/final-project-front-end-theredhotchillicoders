import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

function Calendar({ setInfo, Info }) {
    //moment().format('YYYY-MM-DD HH)
    // const [value, setValue] = useState(new Date());

    function handleChange(newValue) {
        setInfo({ ...Info, date: newValue })
    }
    // useEffect(() => {
    //   setFitnessInfo({ ...fitnessInfo, date: value });
    // }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="What day are you planning?"
                value={Info.date}
                onChange={(newValue) => {
                    handleChange(newValue)
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}

export default Calendar
