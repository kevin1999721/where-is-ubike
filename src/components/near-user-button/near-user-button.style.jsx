import styled from 'styled-components';

export const NearUserButtonContainer = styled.div`
	display: flex;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	position: absolute;
	right: 50px;
	bottom: 50px;
	z-index: 100;
`;

export const Button = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: none;
	outline: none;
	background-color: #000000;
	cursor: pointer;
`;

export const ButtonIconContainer = styled.div``;

export const ButtonTextContainer = styled.span`
	font-size: 12px;
	font-weight: 600;
	color: #ffffff;
	letter-spacing: 1px;
`;
