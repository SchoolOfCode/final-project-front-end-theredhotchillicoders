import React from 'react';
import css from './greeting.module.css';

function Greeting({ userName, progressTitle }) {
	let myDate = new Date();
	let hrs = myDate.getHours();

	if (hrs < 12) {
		return (
			<div className={css.greetingContainer}>
				<h1 className={css.greetingText}>Good morning {userName === null ? '' : userName}</h1>
			</div>
		);
	} else if (hrs >= 12 && hrs <= 17) {
		return (
			<div className={css.greetingContainer}>
				<h1 className={css.greetingText}>Good afternoon {userName === null ? '' : userName}</h1>
			</div>
		);
	} else if (hrs >= 17 && hrs <= 24) {
		return (
			<div className={css.greetingContainer}>
				<h1 className={css.greetingText}>Good evening {userName === null ? '' : userName}</h1>
			</div>
		);
	}
}

export default Greeting;
