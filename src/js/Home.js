/** @format */

import React, { useEffect } from 'react';

function Home() {
	useEffect(() => {
		var element = document.querySelector('.home');
		element.classList.add('active');
		return () => {
			element.classList.remove('active');
		};
	}, []);
	return (
		<>
			<h1>Home</h1>
		</>
	);
}

export default Home;
