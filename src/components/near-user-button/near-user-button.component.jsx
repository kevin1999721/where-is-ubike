import { ReactComponent as GpsIcon } from '../../assets/icon/gps.svg';

import {
	NearUserButtonContainer,
	Button,
	ButtonIconContainer,
	ButtonTextContainer,
} from './near-user-button.style';

const NearUserButton = ({ onButtonClick }) => {
	return (
		<NearUserButtonContainer>
			<Button onClick={onButtonClick}>
				<ButtonIconContainer>
					<GpsIcon />
				</ButtonIconContainer>
				<ButtonTextContainer>附近</ButtonTextContainer>
			</Button>
		</NearUserButtonContainer>
	);
};

export default NearUserButton;
