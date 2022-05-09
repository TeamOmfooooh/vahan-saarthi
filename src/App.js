import React, { Component } from 'react';

import { Routes, Route } from 'react-router-dom';
import {
	Home,
	PotholeRegistration,
	NavBar,
	Login,
	AdminDashboard,
} from './components';

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
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<AdminDashboard />} />
				</Routes>
			</div>
		);
	}
}

export default App;
