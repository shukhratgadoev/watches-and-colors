import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import { Home } from './components/Home/Home';
import { Hall } from './components/Hall/Hall';
import './App.css';

const App = () => {
	const [color, setColor] = useState(randomColor());

	const getSecondInterval = () => {
		let getSecond = new Date().getSeconds();
		if (!(getSecond % 4)) {
			setColor(() => randomColor());
		}
	};
	useEffect(() => {
		setInterval(getSecondInterval, 1000);
	}, []);

	return (
		<div className="container">
			<Home />
			<Hall color={color} />
		</div>
	);
};

export default App;
