import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TDX_BIKE_API_TYPE } from '../../utils/tdx/tdx-bike.utils';
import { fetchAllBikeLanes } from '../../store/bike/bike.action';

import BikeLanesHeader from '../../components/bike-lanes-hearder/bike-lanes-header.component';
import BikeLaneList from '../../components/bike-lane-list/bike-lane-list.component';
import BikeLaneMap from '../../components/bike-lane-map/bike-lane-map.compnent';
import UserLocation from '../../components/user-location/user-location.component';

import { BikeLanesContainer, BikeLanesBody } from './bike-lanes.style';

const BikeLanes = () => {
	const dispatch = useDispatch();
	const [selectedCity, setSelectedCity] = useState(null);
	const [selectedBikeLane, setSelectedBikeLane] = useState(null);
	const [isCardsListOpen, setIsCardsListOpen] = useState(false);

	useEffect(() => {
		dispatch(fetchAllBikeLanes(TDX_BIKE_API_TYPE.CYCLING_SHAPE));
	}, []);

	return (
		<BikeLanesContainer>
			<BikeLanesHeader
				setSelectedOption={setSelectedCity}
				setIsCardsListOpen={setIsCardsListOpen}
				bikeLaneName={selectedBikeLane ? selectedBikeLane.RouteName : ''}
			/>
			<BikeLanesBody>
				<BikeLaneMap bikeLane={selectedBikeLane} />
				<BikeLaneList
					city={selectedCity}
					selectedBikeLane={selectedBikeLane}
					setSelectedBikeLane={setSelectedBikeLane}
					isCardsListOpen={isCardsListOpen}
					setIsCardsListOpen={setIsCardsListOpen}
				/>
			</BikeLanesBody>
			<UserLocation />
		</BikeLanesContainer>
	);
};

export default BikeLanes;
