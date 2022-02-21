import React from 'react';

import { Button } from '@mui/material';


  function ActivityButton({ title, description, category, setFitnessInfo }) {
	function getExercise() {
		setFitnessInfo({ title: title, category: category, description: description });
	}

	return (
		<Button sx={{ p: 5, m: 1, width: 30, height: 30 }} variant="contained" onClick={getExercise}>
			{title}
		</Button>
	);





	
}
export default ActivityButton;
