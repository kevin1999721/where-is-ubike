import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBikeLanesSortByCity } from '../../store/bike/bike.select';

import BikeLaneCard from '../bike-lane-card/bike-lane-card.component';

import { BikeLaneCardsContainer } from './bike-lane-cards.style';

const BikeLaneCards = ({ city, selectedBikeLane, setSelectedBikeLane, setIsCardsListOpen }) => {
	const bikeLanes = useSelector(selectBikeLanesSortByCity);
	const cityCode = city ? city.CityCode : null;
	return (
		<BikeLaneCardsContainer>
			{bikeLanes &&
				bikeLanes[cityCode] &&
				bikeLanes[cityCode].map((bikeLane, index) => {
					const { CityCode: cityCode, RouteName: routeName } = bikeLane;
					return (
						<BikeLaneCard
							key={cityCode + index}
							bikeLane={bikeLane}
							isBikeLaneSelected={selectedBikeLane && routeName === selectedBikeLane.RouteName}
							setSelectedBikeLane={setSelectedBikeLane}
							setIsCardsListOpen={setIsCardsListOpen}
						/>
					);
				})}
		</BikeLaneCardsContainer>
	);
};

export default BikeLaneCards;
