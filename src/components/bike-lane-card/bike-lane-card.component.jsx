import { useState } from 'react';

import { ReactComponent as GpsIcon } from '../../assets/icon/location.svg';

import {
	BikeLaneCardContainer,
	CardTitle,
	CardBoottom,
	BikeLaneLength,
	BikeLaneLocation,
} from './bike-lane-card.style';

const BikeLaneCard = ({
	bikeLane,
	isBikeLaneSelected,
	setSelectedBikeLane,
	setIsCardsListOpen,
}) => {
	const { RouteName: routeName, CyclingLength: laneLength, City: city, Town: town } = bikeLane;

	const onCardClick = () => {
		setSelectedBikeLane(bikeLane);
		setIsCardsListOpen(false);
	};

	return (
		<BikeLaneCardContainer onClick={onCardClick} isSelected={isBikeLaneSelected}>
			<CardTitle>{routeName}</CardTitle>
			<CardBoottom>
				<BikeLaneLength>{laneLength ? laneLength / 1000 + ' km' : '- -'}</BikeLaneLength>
				<BikeLaneLocation>
					<GpsIcon />
					<span>
						{city} {town}
					</span>
				</BikeLaneLocation>
			</CardBoottom>
		</BikeLaneCardContainer>
	);
};

export default BikeLaneCard;
