import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';

function ProgressBar({ TaskPercent }) {
	{
		return (
			<Box>
				<h4>Your Daily Progress:</h4>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Box sx={{ width: '90%', mr: 5, ml: 5 }}>
						<LinearProgress variant="determinate" value={TaskPercent} height="100px" borderRadius="50px" />
					</Box>
					<Box sx={{ minWidth: 35 }}>
						<Typography variant="body2" color="text.secondary">
							{TaskPercent}%
						</Typography>
					</Box>
				</Box>
			</Box>
		);
	}
}

export default ProgressBar;
