import styled, { css } from 'styled-components';

export const BikeLaneListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-height: 80%;
	padding: 0 10px;
	gap: 5px;
	border-radius: 0 0 10px 10px;
	background-color: rgba(0, 0, 0, 0.4);
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(0, -100%);
	transition: 0.3s;

	${({ isCardsListOpen }) => {
		return (
			isCardsListOpen &&
			css`
				transform: translate(0, 0);
			`
		);
	}};
`;

export const CloseButton = styled.button`
	flex-shrink: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	margin: 10px;
	border-radius: 50%;
	border: none;
	outline: none;
	background-color: rgba(0, 0, 0, 0.2);
	cursor: pointer;

	svg {
		transform: rotate(90deg);
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}
`;
