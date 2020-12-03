/** @format */

import React, { useEffect } from 'react';

function App2() {
	useEffect(() => {
		var element = document.querySelector('.app2');
		var element2 = document.querySelector('.applic');
		element.classList.add('active');
		element2.classList.add('active');
		return () => {
			element.classList.remove('active');
			element2.classList.remove('active');
		};
	}, []);
	return (
		<>
			<h1>App2</h1>
		</>
	);
}

export default App2;
