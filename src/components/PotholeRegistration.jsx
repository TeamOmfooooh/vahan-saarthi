import React from 'react';
import Maps from './Maps';

export default function PotholeRegistration() {
	// Detect Location Button Functionality
	const [longitude, setLongitude] = React.useState('');
	const [latitude, setLatitude] = React.useState('');
	function getLocation() {
		navigator.geolocation.getCurrentPosition((position) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		});
	}

	return (
		<div className="my-2 container potholeform">
			<form className="container d-flex flex-column justify-content-center align-items-stretch">
				<div>
					<label for="name" className="form-label">
						Name
					</label>
					<input type="email" className="form-control" id="name" />
				</div>
				<div>
					<label for="contact" className="form-label">
						Phone number
					</label>
					<input type="tel" className="form-control" id="contact" />
				</div>
				<div>
					<div>
						<button
							className="btn btn-primary my-2 form-label form-control"
							type="button"
							onClick={getLocation}
						>
							<i className="bi bi-geo-alt-fill"></i> Detect Location
						</button>
						{longitude && (
							<Maps
								longitude={longitude}
								latitude={latitude}
								simplified
								marker
							/>
						)}
					</div>
				</div>

				<div>
					<label for="inputCity" className="form-label">
						City
					</label>
					<input type="text" className="form-control" id="inputCity" />
				</div>
				<div>
					<label for="inputState" className="form-label">
						State
					</label>
					<input type="text" className="form-control" id="inputState" />
				</div>
				<div>
					<label for="image" className="form-label">
						Upload Picture
					</label>
					<input type="file" id="image" className="form-control" />
				</div>
				<div>
					<div>
						<button
							className="btn btn-danger my-3 form-label form-control"
							type="submit"
						>
							Submit <i className="bi bi-cloud-plus-fill"> </i>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
