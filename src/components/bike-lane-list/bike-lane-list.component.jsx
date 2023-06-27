import BikeLaneCards from '../bike-lane-cards/bike-lane-cards.component';

import { ReactComponent as BackIcon } from '../../assets/icon/back.svg';
import { BikeLaneListContainer, CloseButton } from './bike-lane-list.style';

const BikeLaneList = ({
	city,
	selectedBikeLane,
	setSelectedBikeLane,
	isCardsListOpen,
	setIsCardsListOpen,
}) => {
	const onCloseButtonClick = e => {
		e.preventDefault();
		setIsCardsListOpen(false);
	};

	return (
		<BikeLaneListContainer isCardsListOpen={isCardsListOpen}>
			<BikeLaneCards
				city={city}
				selectedBikeLane={selectedBikeLane}
				setSelectedBikeLane={setSelectedBikeLane}
				setIsCardsListOpen={setIsCardsListOpen}
			/>
			<CloseButton onClick={onCloseButtonClick}>
				<BackIcon />
			</CloseButton>
		</BikeLaneListContainer>
	);
};

export default BikeLaneList;
