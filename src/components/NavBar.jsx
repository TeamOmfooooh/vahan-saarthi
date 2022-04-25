import React from 'react';
export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a to={'/'} className="navbar-brand mx-auto" href="/">
					<img src={require('../images/32.png')} alt="logo" />
					Vahan Saarthi
				</a>

				<a style={{ textDecoration: 'none', color: 'black' }} href="/login">
					<div className="d-flex justify-content-center align-items-center">
						<i
							style={{ fontSize: '1.5rem' }}
							className="bi bi-person-plus-fill"
						></i>
						<div className="mx-1"> Login</div>
					</div>
				</a>
			</div>
		</nav>
	);
}
