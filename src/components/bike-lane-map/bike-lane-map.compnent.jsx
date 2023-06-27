import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMap } from '../../utils/leaflet/leaflet.utils';
import { selectUserGeolocation } from '../../store/user/user.select';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './bike-lane-map.style.css';
import Lottie from 'lottie-web';
import userLocation from '../../assets/icon/youbike-gps.json';

import Map from '../map/map.component';
import NearUserButton from '../near-user-button/near-user-button.component';

import { MapContainer } from './bike-lane-map.style';

const BikeLaneMap = ({ bikeLane }) => {
	const map = useMap();
	const userGeolocation = useSelector(selectUserGeolocation);

	const onNearUserButtonClick = () => {
		const { latitude, longitude } = userGeolocation;
		map.setView([latitude, longitude]);
	};

	useEffect(() => {
		//create bike lane and marker with selected bike Lane

		if (!map || !bikeLane) return;

		const bikeLaneGeometry = [...bikeLane.Geometry];

		const polyline = L.polyline(bikeLaneGeometry, {
			color: '#000000',
			weight: '3',
			dashArray: '1,5',
			renderer: L.canvas(),
		}).addTo(map);

		let makerContainerClass = 'lane-marker-container';
		const svgMarker = `
            <svg width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 18.0726C0 8.09194 8.05911 0 17.9993 0C27.9409 0 36 8.09194 36 18.0726C36 26.8625 29.7496 34.1853 21.4692 35.8091L19.1796 42.1448C18.7795 43.2515 17.2205 43.2515 16.8204 42.1448L14.5308 35.8091C6.25038 34.1853 0 26.8625 0 18.0726ZM25.3249 47.8777C25.3249 49.0498 22.0451 50 17.9992 50C13.9534 50 10.6735 49.0498 10.6735 47.8777C10.6735 46.7055 13.9534 45.7553 17.9992 45.7553C22.0451 45.7553 25.3249 46.7055 25.3249 47.8777Z" fill="#000000"/>
            </svg>
        `;

		const markerLaneStart = L.marker(bikeLaneGeometry[0][0], {
			icon: L.divIcon({
				html: `
                    ${svgMarker}
                    <span>${'始'}</span>
                `,
				className: makerContainerClass,
				iconAnchor: [18, 50],
				popupAnchor: [0, -50],
			}),
		});

		const markerLaneEnd = L.marker(
			bikeLaneGeometry[bikeLaneGeometry.length - 1][
				bikeLaneGeometry[bikeLaneGeometry.length - 1].length - 1
			],
			{
				icon: L.divIcon({
					html: `
                    ${svgMarker}
                    <span>${'終'}</span>
                `,
					className: makerContainerClass,
					iconAnchor: [18, 50],
					popupAnchor: [0, -50],
				}),
			}
		);

		const layerGroup = L.layerGroup([markerLaneStart, markerLaneEnd]).addTo(map);

		map.fitBounds(polyline.getBounds());

		return () => {
			polyline.remove();
			layerGroup.remove();
		};
	}, [map, bikeLane]);

	useEffect(() => {
		// if user geolocation is exsist,create the maker of user's location.

		if (!map || !userGeolocation) return;
		const { latitude, longitude } = userGeolocation;
		const divIconClassName = 'user-location-container';
		const divIcon = L.divIcon({ html: '', className: divIconClassName });
		const marker = L.marker([latitude, longitude], { icon: divIcon }).addTo(map);

		Lottie.loadAnimation({
			container: document.querySelector(`.${divIconClassName}`),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: userLocation,
		});

		return () => {
			marker.remove();
			Lottie.destroy();
		};
	}, [map, userGeolocation]);

	return (
		<MapContainer>
			<Map />
			{userGeolocation && <NearUserButton onButtonClick={onNearUserButtonClick} />}
		</MapContainer>
	);
};

export default BikeLaneMap;
