import React from 'react';
import Chart from './Chart';
export default function Home() {
	return (
		<div className="container my-1">
			<div className="row">
				<div className="col-sm-6">
					<div className="card card_report">
						<div className="card-body">
							<h5 className="card-title">Report</h5>
							<p className="card-text">Spotted a pothole? Report it here</p>
							<a href="/potholeregistration" className="btn btn-danger">
								Report
							</a>
						</div>
					</div>
				</div>
				<div className="col-sm-6 align-self-center">
					<div className="card card_admin">
						<div className="card-body">
							<h5 className="card-title">Admin</h5>
							<p className="card-text">
								Admin portal for authorities to reapir reported potholes
							</p>
							<a href="/login" className="btn btn-primary">
								Login
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-1">
				<h3>State wise chart</h3>
				<Chart />
			</div>
		</div>
	);
}
