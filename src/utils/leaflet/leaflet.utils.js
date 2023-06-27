import { useState, useEffect } from 'react';
import L from 'leaflet';

export const MAP_BIKE_DATA_TYPE = {
	AVAILABLE_RENT: 'AVAILABLE_RENT',
	AVAILABLE_RETURN: 'AVAILABLE_RETURN',
};

export const useMap = (center = [25.03361, 121.56444]) => {
	const [map, setMap] = useState(null);

	useEffect(() => {
		let m = L.map('map').setView(center, 15);

		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(m);

		setMap(m);

		return () => {
			m.remove();
			setMap(null);
		};
	}, []);

	return map;
};
