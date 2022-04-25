import React from 'react';

export default function Home() {
	return (
		<div className="container my-3">
			<div class="row">
				<div class="col-sm-6">
					<div className="card card_report">
						<div class="card-body">
							<h5 class="card-title">Report</h5>
							<p class="card-text">Spotted a pothole? Report it here</p>
							<a href="/potholeregistration" class="btn btn-danger">
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

			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6305170592263!2d76.81124881474203!3d29.961304681912576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e38b1c9410e23%3A0xff2e40965dcd7b69!2sUniversity%20Institute%20of%20Engineering%20and%20Technology%2C%20Kurukshetra%20University!5e0!3m2!1sen!2sin!4v1650597308052!5m2!1sen!2sin"
				width="100%"
				height="400"
				style={{ border: '0', marginTop: '20px' }}
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
}
