import { React, useState, useEffect } from 'react';
import css from './Taskboard.module.css';
import AddTask from '../addTaskButton/addTask.js';
import Todo from '../Task/Task';
import { useTheme } from '@mui/material';
import moment from 'moment';
import ProgressBar from '../ProgressBar/ProgressBar';
import quotes from '../../DummyData/DummyQuotes.js';
import Image from 'next/image';
import lifestyleImage from '../../public/lifestyleMain.png';
import RandomQuote from '../RandomQuote/RandomQuote.js';
import confetti from 'canvas-confetti';

/*
task date in usestate on the index, thats what needs to change
pass down set date into calender
use date to filter tasks
const [value, setValue] = useState(new Date());
*/

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

function filterToDos(todos, taskDate, setFilteredToDos) {
	let selectedDate = moment(taskDate).format('DD - MM - YYYY');
	let filtered = todos.filter((todo) => moment(todo.date).format('DD - MM - YYYY') === selectedDate);
	setFilteredToDos(filtered);
}

export default function TaskBoard({ todos, deleteRequest, setTodos, taskDate }) {
	const [ filteredToDos, setFilteredToDos ] = useState([]);
	const colors = [ '#fdf7ec', '#0a2342', '#f58452', '#0f7173', '#9996d9', '#9ad175' ];
	// const [ taskComplete, setTaskComplete ] = useState(0);
	let theme = useTheme();
	function deleteItem(findIndex) {
		console.log('filteredtodos', filteredToDos);
		setFilteredToDos([ ...filteredToDos.slice(0, findIndex), ...filteredToDos.slice(findIndex + 1) ]);
	}

	useEffect(
		() => {
			filterToDos(todos, taskDate, setFilteredToDos);
		},
		[ todos, taskDate ]
	);

	if (filteredToDos.length > 0) {
		if (filteredToDos.every((element) => element.iscomplete === true)) {
			confetti({
				particleCount: 200,
				colors: colors,
				spread: 90
			});
		}

		return (
			<div>
				<div className={css.progressBar}>
					<ProgressBar filteredToDos={filteredToDos} />
				</div>
				<div
					className={css.taskboard}
					style={{
						backgroundColor: theme.palette.text.secondary,
						boxShadow: '2px 2px 10px black',
						border: `solid 2px ${theme.palette.text.primary}`
					}}
				>
					<div className={css.todoList}>
						{filteredToDos.map((todo, index) => {
							function deleteTaskOnClick() {
								deleteItem(index);
								deleteRequest(todo.id);
							}

							return (
								<Todo
									key={index}
									todo={todo}
									id={todo.id}
									deleteTaskOnClick={deleteTaskOnClick}
									filteredToDos={filteredToDos}
									setFilteredToDos={setFilteredToDos}
									setTodos={setTodos}
									todos={todos}
								/>
							);
						})}
					</div>
					<AddTask />
				</div>
			</div>
		);
	} else {
		return <RandomQuote />;
	}
}

// {/* /*
// filter(todos => {String(todos.date).substring(0,10) == String(taskDate)})
//  function handleDelete(i) {
//     console.log("%chandle delete", "color:lightblue");
//     setToDos([...toDos.slice(0, i), ...toDos.slice(i + 1)]);
//   } */

// // calculate length of the filtered todods.
// // then calculate the number of isComplete = true.
// // divide iscomplete byt total number * 100 and pass to progress bar.
// // the new progresss will be shown on page refresh.

// // */}
