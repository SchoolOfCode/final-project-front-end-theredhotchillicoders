import { React, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import css from './task.module.css'
import { useTheme } from '@mui/styles'

export default function Todo({
    todo,
    id,
    deleteTaskOnClick,
    setFilteredToDos,
    filteredToDos,
}) {
    const theme = useTheme()
    let category = todo.category

    async function sendPatchRequest(id) {
        let newBoolean = !todo.iscomplete

        let authToken = sessionStorage.getItem('Auth Token')

        const response = await fetch(
            `https://socfinalproject.herokuapp.com/activities/${id}`,
            {
                method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + authToken,

                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },

                //redirect: 'follow', // manual, *follow, error
                //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({ iscomplete: newBoolean }), // body data type must match "Content-Type" header
            }
        )
        let data = await response.json()
        console.log(response, data)

        const index = filteredToDos.findIndex((element) => element.id === id)

        // parses JSON response into native JavaScript objects
        const update = { ...filteredToDos[index], iscomplete: newBoolean }
        setFilteredToDos([
            ...filteredToDos.slice(0, index),
            update,
            ...filteredToDos.slice(index + 1),
        ])
    }

    return (
        <div
            className={`${css.task} ${category}` }
            id={category}
            data-testid="Task"
            style={{
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.text.secondary,
            }}
        >
            {todo.description.includes('http') ? (
                <a href={todo.description} target="_blank" rel="noreferrer">
                    {' '}
                    {todo.title}
                </a>
            ) : (
                `${todo.title} - ${todo.duration}`
            )}

            <div>
                <div className={css.checkboxBin}>
                    <input
                        aria-label={`complete ${todo.title}`}
                        data-testid="TaskCheckbox"
                        className={css.checkbox}
                        type="checkbox"
                        checked={todo.iscomplete}
                        onChange={() => sendPatchRequest(todo.id)}
                    />

                    <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={deleteTaskOnClick}
                       
                    >
                        <DeleteIcon fontSize="small"
                         style={{fill:theme.palette.text.primary, color:theme.palette.text.primary}} />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

//
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
