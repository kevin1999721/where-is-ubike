import { useState } from 'react';

import { SwitchButtonContainer, ButtonText, Ball } from './switch-button.style';

const SwitchButton = ({ setState }) => {
	const [isClick, setIsClick] = useState(false);
	const buttonClickHandler = () => {
		setIsClick(!isClick);
		setState(!isClick);
	};
	return (
		<SwitchButtonContainer isClick={isClick} onClick={buttonClickHandler}>
			<ButtonText isClick={isClick}>{isClick ? '隱藏車道' : '顯示車道'}</ButtonText>
			<Ball isClick={isClick} />
		</SwitchButtonContainer>
	);
};

export default SwitchButton;
