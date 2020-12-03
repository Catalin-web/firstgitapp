/** @format */
import './App.css';
import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Home from './js/Home';
import style from './style/css.css';
import Navbar from './js/Navbar';
import Footer from './js/Footer';
import App1 from './js/App1';
import App2 from './js/App2';
import App3 from './js/App3';
import Secondpage from './js/Secondpage';
import Thirdpage from './js/Thirdpage';
function App() {
	return (
		<>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route exact path='/app1'>
						<App1 />
					</Route>
					<Route exact path='/app2'>
						<App2 />
					</Route>
					<Route exact path='/app3'>
						<App3 />
					</Route>
					<Route exact path='/secondpage'>
						<Secondpage />
					</Route>
					<Route exact path='/thirdpage'>
						<Thirdpage />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</>
	);
}

export default App;
