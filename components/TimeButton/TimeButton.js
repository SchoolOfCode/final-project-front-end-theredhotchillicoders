import React from 'react';
import Link from 'next/link';
import { Grid, Card, CardActionArea, CardContent, Typography } from '@mui/material';

function TimeButton({ time, onClick }) {
	return (
		<Link href="/">
			<Grid item xs={12} sm={6} md={3} p={1}>
				<Card sx={{ maxWidth: 345, bgcolor: '#f58452', borderRadius: '30px' }}>
					<CardActionArea onClick={onClick}>
						<CardContent>
							<Typography gutterBottom variant="h5" component="div" color="#fff" align="center">
								{time}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</Link>
	);

}

export default TimeButton;

// Might not need this link to take you back to the home page?
