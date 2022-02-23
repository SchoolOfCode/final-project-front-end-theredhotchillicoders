import { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function Calendar() {
	const [ value, setValue ] = useState(new Date('2014-08-18T21:11:54'));

	// const handleChange = (newValue) => {
	// 	setValue(newValue);
	// };

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePicker
				label="Basic example"
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
				}}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}

export default Calendar;
