import { React, useState } from 'react';
import { CardContent, Typography, Button, Card, Modal, Box, TextField } from '@mui/material';

function AddYourOwn(info, setInfo) {
	const [ open, setOpen ] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4
	};

	setInfo({
		...info,
		title: title,
		category: category,
		description: description
	});

	return (
		<Card
			data-testid="ActivityButtonCard"
			id="myGoals"
			sx={{
				maxWidth: 250,
				boxShadow: 5,
				borderRadius: '30px',
				p: 3
			}}
		>
			<Button onClick={handleOpen}>Add Your Own</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<TextField
						id="outlined-multiline-static"
						label="title"
						rows={4}
						defaultValue="title..."
						width="100%"
					/>
					<TextField
						id="outlined-multiline-static"
						label="Description"
						multiline
						rows={4}
						defaultValue="Set new goal..."
						width="100%"
					/>
					<TextField
						id="outlined-multiline-static"
						label="Duration"
						rows={4}
						defaultValue="How often?"
						width="100%"
					/>
					<button>Send</button>
				</Box>
			</Modal>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" color="#fff" textAlign="center">
					Personal Goal
				</Typography>
			</CardContent>
		</Card>
	);
}

export default AddYourOwn;

//
