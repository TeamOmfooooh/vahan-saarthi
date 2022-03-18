import React from 'react';

export default function PotholeRegistration() {
	return (
		<div className="my-2 container">
			<form className="container row g-3">
				<div className="col-md-6">
					<label for="name" className="form-label">
						Name
					</label>
					<input type="email" className="form-control" id="name" />
				</div>
				<div class="col-md-6">
					<label for="contact" className="form-label">
						Phone number
					</label>
					<input type="tel" className="form-control" id="contact" />
				</div>

				<div className="col-md-4 d-flex justify-content-center mt-md-12 align-items-center">
					<button className="btn btn-primary mb-2 form-label form-control">
						<i class="bi bi-geo-alt-fill"></i> Detect Location
					</button>
				</div>
				<div className="col-md-4">
					<label for="longitude" className="form-label">
						Longitude
					</label>
					<input type="text" className="form-control" id="longitude" />
				</div>
				<div className="col-md-4">
					<label for="latitude" className="form-label">
						Latitude
					</label>
					<input type="text" className="form-control" id="latitude" />
				</div>

				<div className="col-md-4">
					<label for="inputCity" className="form-label">
						City
					</label>
					<input type="text" className="form-control" id="inputCity" />
				</div>
				<div className="col-md-4">
					<label for="inputState" className="form-label">
						State
					</label>
					<input type="text" className="form-control" id="inputState" />
				</div>
				<div className="col-md-4">
					<label for="image" className="form-label">
						Upload Picture
					</label>
					<input type="file" id="image" className="form-control" />
				</div>
				<div className="col-12">
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}
