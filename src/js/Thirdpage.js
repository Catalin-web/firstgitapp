/** @format */

import React, { useEffect } from 'react';

function Thirdpage() {
	useEffect(() => {
		var element = document.querySelector('.thirdpage');
		element.classList.add('active');
		return () => {
			element.classList.remove('active');
		};
	}, []);
	return (
		<>
			<h1>Third page</h1>
		</>
	);
}

export default Thirdpage;
