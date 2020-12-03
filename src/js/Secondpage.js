/** @format */

import React, { useEffect } from 'react';

function Secondpage() {
	useEffect(() => {
		var element = document.querySelector('.secondpage');
		element.classList.add('active');
		return () => {
			element.classList.remove('active');
		};
	}, []);
	return (
		<>
			<h1>Second page</h1>
		</>
	);
}

export default Secondpage;
