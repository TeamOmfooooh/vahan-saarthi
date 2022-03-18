import React, { Component } from 'react';
// import logo from "./logo.svg";
// import "./App.css";

import { Routes, Route } from 'react-router-dom';
import { Home, PotholeRegistration, NavBar } from './components';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/potholeregistration"
						element={<PotholeRegistration />}
					/>
				</Routes>
			</div>
		);
	}
}

export default App;
