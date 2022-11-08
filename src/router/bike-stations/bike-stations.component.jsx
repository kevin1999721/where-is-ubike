import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchAllBikeStations,
	fetchAllBikeAvailability,
	fetchAllBikeLanes,
} from '../../store/bike/bike.action';
import { TDX_BIKE_API_TYPE } from '../../utils/tdx/tdx-bike.utils';
import { MAP_BIKE_DATA_TYPE } from '../../utils/leaflet/leaflet.utils';

import BikeStationsHeader from '../../components/bike-stations-header/bike-stations-header.component';
import BikeStationsMap from '../../components/bike-stations-map/bike-stations-map.component';

import { BikeStationsContainer, BikeStationsBody } from './bike-stations.style';

const BikeStations = () => {
	const dispatch = useDispatch();
	const [bikeDataType, setBikeDataType] = useState(MAP_BIKE_DATA_TYPE.AVAILABLE_RENT);
	const [isShowBikeLanes, setIsShowBikeLanes] = useState(false);

	useEffect(() => {
		dispatch(fetchAllBikeStations(TDX_BIKE_API_TYPE.STAION));
		dispatch(fetchAllBikeAvailability(TDX_BIKE_API_TYPE.AVAILABILITY));
	}, []);

	useEffect(() => {
		if (!isShowBikeLanes) return;
		dispatch(fetchAllBikeLanes(TDX_BIKE_API_TYPE.CYCLING_SHAPE));
	}, [isShowBikeLanes]);

	return (
		<BikeStationsContainer>
			<BikeStationsHeader
				setBikeDataType={setBikeDataType}
				setIsShowBikeLanes={setIsShowBikeLanes}
			/>
			<BikeStationsBody>
				<BikeStationsMap isShowBikeLanes={isShowBikeLanes} bikeDataType={bikeDataType} />
			</BikeStationsBody>
		</BikeStationsContainer>
	);
};

export default BikeStations;
