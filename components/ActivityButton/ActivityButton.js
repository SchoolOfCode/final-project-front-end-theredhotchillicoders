import React from 'react';

function ActivityButton({ title, onClick }) {
	return <button onClick={onClick}>{title}</button>;
}

export default ActivityButton;
