import styled, { css } from 'styled-components';

export const DropdownContainer = styled.div`
	position: relative;
`;

export const SelectedOptionContainer = styled.div``;

export const SelectedOption = styled.div`
	width: 130px;
	height: 30px;
	padding: 0 15px;
	line-height: 30px;
	border-radius: 100px;
	font-size: 13px;
	letter-spacing: 1px;
	color: #ffffff;
	background-color: #000000;
	cursor: pointer;
`;

export const DropdownIconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	position: absolute;
	top: 0;
	right: 10px;
	transition: 0.3s;

	svg {
		path {
			fill: #ffffff;
		}
	}

	${({ isDropdownOpen }) =>
		isDropdownOpen &&
		css`
			transform: rotate(180deg);
		`};
`;
