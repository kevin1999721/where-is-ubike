import styled, { css } from 'styled-components';

export const DropdownOptionsContainer = styled.ul`
	width: 100%;
	max-height: 400px;
	border-radius: 10px;
	background-color: #000000;
	position: absolute;
	top: 110%;
	overflow: auto;
	outline: none;
	z-index: 5;
`;

export const OptionContainer = styled.li`
	height: 30px;
	line-height: 30px;
	padding: 0 15px;
	font-size: 13px;
	letter-spacing: 1px;
	color: #ffffff;
	cursor: pointer;

	${({ isClicked }) =>
		isClicked &&
		css`
			background-color: #fed801;
		`}

	&:hover {
		background-color: #fed801;
	}
`;
