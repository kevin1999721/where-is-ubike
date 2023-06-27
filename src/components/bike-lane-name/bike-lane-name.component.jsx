import { BikeLaneNameContainer } from './bike-lane-name.style';

const BikeLaneName = ({ bikeLaneName, setIsCardsListOpen }) => {
	const onBikeLaneNameClick = () => {
		setIsCardsListOpen(cur => !cur);
	};

	return (
		<BikeLaneNameContainer onClick={onBikeLaneNameClick}>
			<span>{bikeLaneName}</span>
		</BikeLaneNameContainer>
	);
};

export default BikeLaneName;
