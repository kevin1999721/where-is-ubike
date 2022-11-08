import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBikeStationAvailability, selectBikeLanes } from '../../store/bike/bike.select';
import { useMap, MAP_BIKE_DATA_TYPE } from '../../utils/leaflet/leaflet.utils';
import L from 'leaflet';
import 'leaflet-canvas-marker';
import 'leaflet/dist/leaflet.css';

import Map from '../map/map.component';
import StationSearchForm from '../station-serach-form/station-search-form.component';

import { MapContainer } from './bike-stations-map-style';
import './bike-stations-map.style.css';

const BikeStationsMap = ({ isShowBikeLanes, bikeDataType }) => {
	const map = useMap();
	const [searchedStation, setSearchedStation] = useState(null);
	const bikeStationAvailability = useSelector(selectBikeStationAvailability);
	const bikeLanes = useSelector(selectBikeLanes);

	const getFilteredBikeStations = postion => {
		return bikeStationAvailability.filter(item => {
			if (
				map.distance(postion, [
					item.StationPosition.PositionLat,
					item.StationPosition.PositionLon,
				]) <= 1000
			) {
				return true;
			}
		});
	};

	const addMarkersToMap = (position, itemToOpenPopup) => {
		const bikeStationsSlice = getFilteredBikeStations(position);
		const svgMarker = `
			<svg width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0 18.0726C0 8.09194 8.05911 0 17.9993 0C27.9409 0 36 8.09194 36 18.0726C36 26.8625 29.7496 34.1853 21.4692 35.8091L19.1796 42.1448C18.7795 43.2515 17.2205 43.2515 16.8204 42.1448L14.5308 35.8091C6.25038 34.1853 0 26.8625 0 18.0726ZM25.3249 47.8777C25.3249 49.0498 22.0451 50 17.9992 50C13.9534 50 10.6735 49.0498 10.6735 47.8777C10.6735 46.7055 13.9534 45.7553 17.9992 45.7553C22.0451 45.7553 25.3249 46.7055 25.3249 47.8777Z" fill="#FED801"/>
			</svg>
		`;
		let makerToOpen = null;

		const markers = bikeStationsSlice.map(item => {
			const {
				StationAddress: { Zh_tw: stationAddress },
				StationName: { Zh_tw: staionName },
				AvailableRentBikes: availableRentBikes,
				AvailableReturnBikes: availableReturnBikes,
				StationPosition: { PositionLat: positionLat, PositionLon: positionLon },
			} = item;

			let makerText = '';
			let makerContainerClass = 'marker-container';
			let isOpenPopup = false;
			if (itemToOpenPopup && itemToOpenPopup.StationUID === item.StationUID) isOpenPopup = true;

			switch (bikeDataType) {
				case MAP_BIKE_DATA_TYPE.AVAILABLE_RENT:
					makerText = availableRentBikes;
					makerContainerClass += availableRentBikes === 0 ? ' empty' : '';
					break;
				case MAP_BIKE_DATA_TYPE.AVAILABLE_RETURN:
					makerText = availableReturnBikes;
					makerContainerClass += availableReturnBikes === 0 ? ' empty' : ' return';
					break;
				default:
					break;
			}

			const customMarkerIcon = L.divIcon({
				html: `
					${svgMarker}
					<span>${makerText}</span>
				`,
				className: makerContainerClass,
				iconAnchor: [18, 50],
				popupAnchor: [0, -50],
			});

			const bindPopupText = `
				<p>${staionName}</p>
				<p>${stationAddress}</p>
				<p>可借車輛<span class='availability'>${availableRentBikes}</span></p>
				<p>可停空位<span class='availability'>${availableReturnBikes}</span></p>
			`;

			const marker = L.marker([positionLat, positionLon], {
				icon: customMarkerIcon,
			}).bindPopup(bindPopupText, {
				autoPanPadding: L.point(20, 20),
				autoPan: !isOpenPopup,
			});

			if (isOpenPopup) makerToOpen = marker;

			return marker;
		});

		const layerGroup = L.layerGroup(markers).addTo(map);

		if (makerToOpen) makerToOpen.openPopup();

		return layerGroup;
	};

	useEffect(() => {
		if (!map || !bikeStationAvailability) return;

		let { lat: lastLat, lng: lastLng } = map.getCenter();

		if (searchedStation) {
			const {
				StationPosition: { PositionLat: positionLat, PositionLon: positionLon },
			} = searchedStation;

			map.setView([positionLat, positionLon], 15);

			lastLat = positionLat;
			lastLng = positionLon;
		}

		let lastMapCenter = [lastLat, lastLng];
		let preMrkersLayer = addMarkersToMap(lastMapCenter, searchedStation);

		const onMapMoveEnd = () => {
			let { lat: currentlat, lng: currentlng } = map.getCenter();
			let currentMapCenter = [currentlat, currentlng];

			if (map.distance(lastMapCenter, currentMapCenter) <= 1000) return;

			if (preMrkersLayer) preMrkersLayer.clearLayers();
			const markersLayer = addMarkersToMap(currentMapCenter);
			lastMapCenter = currentMapCenter;
			preMrkersLayer = markersLayer;
			setSearchedStation(null);
		};

		map.on('moveend', onMapMoveEnd);

		return () => {
			preMrkersLayer.clearLayers();
			map.off('moveend', onMapMoveEnd);
		};
	}, [map, bikeStationAvailability, bikeDataType, searchedStation]);

	useEffect(() => {
		if (!map || !bikeLanes) return;

		if (isShowBikeLanes) {
			let bikeLanesGeometry = [];

			bikeLanes.forEach(item => {
				bikeLanesGeometry = [...bikeLanesGeometry, ...item.Geometry];
			});

			const polyline = L.polyline(bikeLanesGeometry, {
				color: '#000000',
				weight: '3',
				dashArray: '1,5',
				renderer: L.canvas(),
			}).addTo(map);

			return () => {
				polyline.remove();
			};
		}
	}, [map, isShowBikeLanes, bikeLanes]);

	return (
		<MapContainer>
			<Map />
			<StationSearchForm setSearchedItem={setSearchedStation} />
		</MapContainer>
	);
};

export default BikeStationsMap;
