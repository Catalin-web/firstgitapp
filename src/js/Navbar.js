/** @format */

import React from 'react';
function Navbar() {
	function myFunction() {
		var x = document.getElementById('myTopnav');
		if (x.className === 'topnav') {
			x.className += ' responsive';
		} else {
			x.className = 'topnav';
		}
	}

	return (
		<>
			<nav>
				<div className='topnav' id='myTopnav'>
					<a href='/' className='home'>
						Home
					</a>
					<a href='/secondpage' className='schedule'>
						First page
					</a>
					<a href='/thirdpage' className='wallet'>
						Second page
					</a>
					<div className='dropdown applic'>
						<button className='dropbtn'>
							Apps
							<i className='fa fa-caret-down'></i>
						</button>
						<div className='dropdown-content'>
							<a href='/app1' className='istorie'>
								App 1
							</a>
							<a href='/app2' className='geografie'>
								App 2
							</a>
							<a href='/app3' className='engleza'>
								App 3
							</a>
						</div>
					</div>
					<a className='icon' onClick={myFunction}>
						&#9776;
					</a>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
