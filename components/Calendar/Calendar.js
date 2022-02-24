import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { LocalFireDepartment } from "@mui/icons-material";

function Calendar({ setFitnessInfo, fitnessInfo }) {
  //moment().format('YYYY-MM-DD HH)
  const [value, setValue] = useState(new Date());
  console.log(value);

  // const handleChange = (newValue) => {
  // 	setValue(newValue);
  // };
  useEffect(() => {
    setFitnessInfo({ ...fitnessInfo, date: value });
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="What day are you planning?"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          console.log(newValue, "newValue");
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default Calendar;
