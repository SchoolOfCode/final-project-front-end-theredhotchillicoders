import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

function Calendar({ setFitnessInfo, fitnessInfo }) {
  //moment().format('YYYY-MM-DD HH)
  // const [value, setValue] = useState(new Date());

  function handleChange(newValue) {
    setFitnessInfo({ ...fitnessInfo, date: newValue });
  }
  // useEffect(() => {
  //   setFitnessInfo({ ...fitnessInfo, date: value });
  // }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="What day are you planning?"
        value={fitnessInfo.date}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
