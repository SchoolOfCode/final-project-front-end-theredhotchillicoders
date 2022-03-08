import { React, useState } from 'react';
import { Grid, CardContent, Typography, Button, Card, Modal, Box, TextField, CardActionArea } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

function AddYourOwn({ info, setInfo, id, text }) {
	const [ open, setOpen ] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ duration, setDuration ] = useState('');

	const modalStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '90%',
		bgcolor: 'background.paper',
		border: '6px solid #fff',
		boxShadow: 24,
		p: 4,

		borderRadius: '25px',
		display: 'flex',
		flexDirection: 'column'
	};

	function sendData() {
		const objectToSend = {
			...info,
			title: title,
			category: 'myGoals',
			description: description,
			duration: duration
		};

		console.log('object to send', objectToSend);
		setInfo({ ...info, ...objectToSend });

		sendPostRequest(objectToSend);
		// set the state to have the data and the personal information in.
		// we need to get the data from the calander
		// then this will be post to the database
	}
	console.log('info add you own', info);

	async function sendPostRequest(objectToSend) {
		// Default options are marked with *
		let authToken = sessionStorage.getItem('Auth Token');
		const response = await fetch(`https://socfinalproject.herokuapp.com/activities`, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + authToken
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify(objectToSend) // body data type must match "Content-Type" header
		});
	}

	return (
		<Grid item xs={6} sm={3} md={2} p={1}>
			<Card
				className="AddYourOwn"
				data-testid="ActivityButtonCard"
				id={id}
				sx={{
					maxWidth: 250,
					boxShadow: 5,
					borderRadius: '30px',
					p: 3,
					maxHeight: 280,
					minHeight: 280
				}}
			>
				{' '}
				<CardActionArea>
					<Image onClick={handleOpen} src="/Add.svg" alt="add" width="174" height="174" />

					<Modal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={modalStyle}>
							<TextField
								id="outlined-multiline-static"
								label="Title"
								rows={4}
								placeholder="Title..."
								width="100%"
								onChange={(e) => setTitle(e.target.value)}
							/>
							<TextField
								id="outlined-multiline-static"
								label="Description"
								multiline
								rows={4}
								placeholder="Set new goal..."
								width="100%"
								onChange={(e) => setDescription(e.target.value)}
							/>
							<TextField
								id="outlined-multiline-static"
								label="Duration"
								rows={4}
								placeholder="How often?"
								width="100%"
								onChange={(e) => setDuration(e.target.value)}
							/>
							<Link a href="/">
								<a>
									<Button className="PopupSendButton" variant="outlined" onClick={sendData}>
										Send
									</Button>
								</a>
							</Link>
						</Box>
					</Modal>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div" color="#fff" textAlign="center">
							{text}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
}

export default AddYourOwn;
