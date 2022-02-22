import React from 'react';

import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ActivityButton({ title, description, category, setFitnessInfo, image }) {
	function getExercise() {
		setFitnessInfo({
			title: title,
			category: category,
			description: description
		});
	}

	return (
		<Grid item xs={6} sm={6} md={3} p={1}>
			<Card sx={{ maxWidth: 345, bgcolor: '#f58452', borderRadius: '30px' }}>
				<CardActionArea onClick={getExercise}>
					<CardMedia component="img" height="100%" image={image} alt={title} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="div" color="#fff">
							{title}
						</Typography>
						<IconButton aria-label="add to favorites">
							<FavoriteIcon style={{ color: 'white' }} />
						</IconButton>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}
export default ActivityButton;

// Description text removed
{
	/* <Typography variant="body2" color="#fff">
{description}
</Typography> */
}
