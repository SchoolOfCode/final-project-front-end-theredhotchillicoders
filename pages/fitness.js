import NavBar from '../components/NavBar/NavBar.js';
import ActivityButton from '../components/ActivityButton/ActivityButton.js';
import TimeButton from '../components/TimeButton/TimeButton.js';
import { useState } from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';

const dummyFitness = [
	{ title: 'Running' },
	{ title: 'Mat Workout' },
	{ title: 'Swimming' },
	{ title: 'Weights' },
	{ title: 'Skipping' },
	{ title: 'Cycling' }
];

const times = [ '15 mins', '30mins', '45mins', '1 hours' ];

const Fitness = () => {
	const [ fitnessInfo, setFitnessInfo ] = useState();

	function getExercise(e) {
		setFitnessInfo({ title: e.target.innerHTML });
	}

	function getTime(e) {
		setFitnessInfo({ ...fitnessInfo, time: e.target.innerHTML });
		// sendPostRequest()
	}

	//  async function sendPostRequest(){
	//    send our object to our data base
	//  }

	console.log(fitnessInfo);

	return (
		<div>
			<NavBar />
			<h1>Fitness</h1>
			<Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
				{fitnessInfo === undefined ? (
					dummyFitness.map((exercise) => (
						<ActivityButton title={exercise.title} key={exercise.title} onClick={getExercise} />
					))
				) : (
					times.map((time, index) => <TimeButton time={time} key={index} onClick={getTime} />)
				)}
			</Box>
			<Link href="/">Back</Link>
		</div>
	);
};

export default Fitness;

// create our own array of objects with the exercise information in.
// We will map over this array to create our tiles.
// The tile will be styled in it's own component.
// click the tile then this will hide the exercises & reveal the times.
// somehow we want to save the information on each button.
// This information will be saved in a use state object will be posted to our database.... and fetched when we load the daily page.

//
