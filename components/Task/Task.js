import { React, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import css from './task.module.css';

export default function Todo({ todo, id, deleteTaskOnClick }) {
	let category = todo.category;

	async function sendPatchRequest(id) {
		let newBoolean = !todo.iscomplete;

		let authToken = sessionStorage.getItem('Auth Token');

		const response = await fetch(`https://socfinalproject.herokuapp.com/activities/${id}`, {
			method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			// credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + authToken

				// 'Content-Type': 'application/x-www-form-urlencoded',
			},

			//redirect: 'follow', // manual, *follow, error
			//referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
			body: JSON.stringify({ iscomplete: newBoolean }) // body data type must match "Content-Type" header
		});
		let data = await response.json();
		console.log(response, data);
		// parses JSON response into native JavaScript objects
	}

	return (
		<div className={css.todo} id={category}>
			{todo.title}
			<div>
				{todo.iscomplete === true ? (
					<input
						className={css.checkbox}
						checked
						type="checkbox"
						onChange={() => sendPatchRequest(todo.id)}
					/>
				) : (
					<input className={css.checkbox} type="checkbox" onChange={() => sendPatchRequest(todo.id)} />
				)}

				<IconButton aria-label="delete" size="small" onClick={deleteTaskOnClick}>
					<DeleteIcon fontSize="small" />
				</IconButton>
			</div>
		</div>
	);
}

// onClick send the patch request to update the database

// useEffect(
// 	() => {
// 		async function fetchData() {
// 			let authToken = sessionStorage.getItem('Auth Token');
// 			const response = await fetch(`https://socfinalproject.herokuapp.com/activities`, {
// 				headers: {
// 					Authorization: 'Bearer ' + authToken
// 				}
// 			});
// 			const data = await response.json();
// 			console.log('fetched data', data);
// 			setTodos(data.payload);
// 		}
// 		if (user.accessToken) {
// 			fetchData();
// 		}
// 	},
// 	[ user ]
// );
