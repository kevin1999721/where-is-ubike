import styled, { css } from 'styled-components';

export const DataOptionsContainer = styled.div`
	display: flex;
	max-width: 300px;
	width: 100%;
	border-radius: 100px;
	background-color: #ffffff;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);

	&:before {
		content: '';
		width: 50%;
		height: 100%;
		border-radius: 100px;
		background-color: #000000;
		transition: 0.5s;
		position: absolute;
		top: 0;
		left: ${({ clickIndex }) => (clickIndex > 0 ? `${100 / (clickIndex + 1)}%` : `0px`)};
	}

	@media (max-width: 1200px) {
		width: 230px;
	}

	@media (max-width: 768px) {
		max-width: 100%;
		width: 100%;
		border-radius: 0px;
		background-color: #fed801;
		bottom: 0;
		z-index: 20;

		&:before {
			content: unset;
		}
	}
`;

export const DataOption = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 5px;
	padding: 5px 20px;
	z-index: 1;
	cursor: pointer;

	${({ isClick }) =>
		isClick &&
		`color:#fed801;
			path{
				fill:#fed801
			}
	`}

	@media (max-width: 1200px) {
		padding: 5px 5px;
	}

	@media (max-width: 768px) {
		${({ isClick }) =>
			isClick
				? css`
						color: #000000;
						rect {
							fill: transparent;
						}
						path {
							fill: #000000;
						}
				  `
				: css`
						color: #ffffff;
						rect {
							fill: transparent;
						}
						path {
							fill: #ffffff;
						}
				  `}
	}
`;
