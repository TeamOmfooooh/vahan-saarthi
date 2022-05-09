import React from 'react';

const Login = () => {
	return (
		<div className="container login">
			<form className="d-flex flex-column justify-content-center align-items-center login_form">
				<h2 className="text-center">Login</h2>
				<div>
					<input
						type="email"
						placeholder="E-mail"
						className="form-control my-2"
						id="email"
					/>
				</div>
				<div>
					<input
						type="password"
						placeholder="Password"
						className="form-control my-2"
						id="contact"
					/>
				</div>
				<div>
					<div>
						<button
							className="btn btn-success my-2 form-label form-control"
							type="submit"
						>
							Login
						</button>
					</div>
				</div>
				<div className="text-end">
					<a href="/forgotPassword">Forgot Password?</a>
				</div>
				<div className="text-center">
					<a href="/createAccount">Create an Account</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
