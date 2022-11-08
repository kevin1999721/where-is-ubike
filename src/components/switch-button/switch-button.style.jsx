import styled, { css } from 'styled-components';

export const SwitchButtonContainer = styled.div`
	display: flex;
	align-items: center;
	border-radius: 100px;
	padding: 3px;
	background-color: #000000;
	color: #ffffff;
	cursor: pointer;
	position: relative;
	// transition: 0.5s;

	${({ isClick }) =>
		isClick &&
		css`
			background-color: #ffffff;
			color: #000000;
		`}
`;

export const ButtonText = styled.span`
	padding: 0 10px;
	font-size: 13px;
	position: relative;
	left: 0;
	transition: 0.5s;

	${({ isClick }) =>
		isClick &&
		css`
			left: 100%;
			transform: translate(-100%, 0);
		`}
`;

export const Ball = styled.div`
	background-color: #ffffff;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	position: relative;
	right: 0;
	transition: 0.5s;

	${({ isClick }) =>
		isClick &&
		css`
			right: 100%;
			transform: translate(100%, 0);
			background-color: #fed801;
		`}
`;
