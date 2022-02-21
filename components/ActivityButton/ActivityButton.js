import React from 'react';
import { Button } from '@mui/material';

function ActivityButton({ title, onClick }) {
	return (
		<Button sx={{ p: 5, m: 1, width: 30, height: 30 }} variant="contained" onClick={onClick}>
			{title}
		</Button>
	);
}

export default ActivityButton;
