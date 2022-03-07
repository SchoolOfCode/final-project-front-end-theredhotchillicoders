import ActivityButton from '../components/ActivityButton/ActivityButton.js';
import TimeButton from '../components/TimeButton/TimeButton.js';
import { useState } from 'react';
import Link from 'next/link';
import { Typography, Grid } from '@mui/material';
import { dummyGoals, times } from '../DummyData/DummyGoalsData';
import Calendar from '../components/Calendar/Calendar.js';
import AddYourOwn from '../components/AddYourOwn/AddYourOwn';

const date = new Date();
const Goals = ({ user }) => {
	const [ GoalsInfo, setGoalsInfo ] = useState({
		date: date,
		title: '',
		category: 'myGoals',
		description: '',
		userid: user.uid
	});

	// function getTime(e) {
	//   setFitnessInfo({ ...fitnessInfo, duration: e.target.innerHTML });
	//   sendPostRequest(fitnessInfo);
	// }

	return (
		<div>
			<h1 className=" goalsbg ">Personal Goals</h1>
			<div className="activity-calander">
				<Calendar setInfo={setGoalsInfo} Info={GoalsInfo} />
			</div>
			<Grid container>
				<AddYourOwn info={GoalsInfo} setInfo={setGoalsInfo} />
				{GoalsInfo.title === '' ? (
					dummyGoals.map((goals) => (
						<ActivityButton
							title={goals.title}
							category={goals.category}
							description={goals.description}
							key={goals.title}
							setInfo={setGoalsInfo}
							image={goals.image}
							Info={GoalsInfo}
							// date={date}
						/>
					))
				) : (
					times.map((time, index) => (
						<TimeButton time={time} key={index} setInfo={setGoalsInfo} Info={GoalsInfo} />
					))
				)}
			</Grid>

			<Link href="/">
				<a>
					<div className="backBtn">
						<Typography> Back </Typography>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default Goals;
