import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import css from "./taskCalendar.module.css";

export default function TaskCalendar({ taskDate, setTaskDate }) {
  function handleChange(newValue) {
    setTaskDate(newValue);
  }
  return (
    <div className={css.taskCalendar}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={taskDate}
          onChange={(newValue) => {
            handleChange(newValue);
          }}
          renderInput={(params) => (
            <TextField sx={{ backgroundColor: "inherit" }} {...params} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}
