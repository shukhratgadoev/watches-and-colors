import React, { useState } from 'react';

export const Home = () => {
	const [ctime, setCtime] = useState();

	let time = new Date().toLocaleTimeString([], {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	});

	const UpdateTime = () => {
		time = new Date().toLocaleTimeString();
		setCtime(time);
	};
	setInterval(UpdateTime, 1000);

	return (
		<div className="home-wrapper">
			<h1>Home time {ctime}</h1>
		</div>
	);
};
