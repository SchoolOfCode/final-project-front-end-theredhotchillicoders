import React from 'react';
import { useEffect } from 'react';

function ActivityButton({ title, description, category, setFitnessInfo }) {
	function getExercise() {
		setFitnessInfo({ title: title, category: category, description: description });
	}

	console.log('category', category);
	return <button onClick={getExercise}>{title}</button>;
}

export default ActivityButton;
