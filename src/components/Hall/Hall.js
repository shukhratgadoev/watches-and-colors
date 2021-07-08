import React from 'react';
import './Hall.css';

export const Hall = ({ color }) => {
	return (
		<div className="bg-color" style={{ backgroundColor: color }}>
			<h1>Hall component</h1>
		</div>
	);
};
