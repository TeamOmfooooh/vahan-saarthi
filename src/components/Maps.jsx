import React from 'react';
import HPlatform, { HMap, HMapMarker } from 'react-here-map';
const Maps = ({ longitude, latitude, marker, points, simplified }) => {
	const height = simplified ? '300px' : '350px';
	const width = simplified ? '440px' : '100%';
	const coords = { lat: latitude, lng: longitude };
	return (
		<HPlatform
			apikey={'tOmOLh4ys_dj62hFuFXxAOW_jrRvmIewkzpdqLq2e80'}
			useCIT
			useHTTPS
			includeUI
			includePlaces
			interactive
		>
			<HMap
				style={{
					height,
					width,
				}}
				mapOptions={{
					center: { lat: latitude, lng: longitude },
					zoom: 12,
				}}
				marker
			>
				{marker && <HMapMarker coords={coords} />}
				{/* {points&& <HMapMarker coords={potholes}} */}
			</HMap>
		</HPlatform>
	);
};

export default Maps;
