import styled, { css } from 'styled-components';

export const BikeLaneCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 350px;
	min-height: 80px;
	padding: 10px;
	border-radius: 5px;
	box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
	background-color: #ffffff;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		background-color: #ffffbb;
	}

	${({ isSelected }) =>
		isSelected &&
		css`
			background-color: #ffffbb;
		`}
`;

export const CardTitle = styled.h1`
	font-size: 16px;
	font-weight: 400;
`;

export const CardBoottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: auto;
`;

export const BikeLaneLength = styled.span`
	font-size: 13px;
	color: #7a7a7a;
`;

export const BikeLaneLocation = styled.div`
	display: flex;
	align-items: center;

	svg {
		flex-shrink: 0;
		path {
			fill: #fed801;
		}
	}

	span {
		font-size: 13px;
		color: #7a7a7a;
	}
`;
