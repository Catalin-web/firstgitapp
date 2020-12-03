/** @format */

import React, { useEffect } from 'react';

function App1() {
	useEffect(() => {
		var element = document.querySelector('.app1');
		element.classList.add('active');
		var element2 = document.querySelector('.applic');
		element2.classList.add('active');
		return () => {
			element.classList.remove('active');
			element2.classList.remove('active');
		};
	}, []);
	return (
		<>
			<h1>App1</h1>
		</>
	);
}

export default App1;
