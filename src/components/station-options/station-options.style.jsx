import styled from 'styled-components';

export const OptionsContainer = styled.div`
	position: absolute;
	left: 0;
	top: 100%;
	width: 100%;
	max-height: 300px;
	background-color: #ffffff;
	outline: none;
	border-radius: 7px;
	overflow: auto;

	&:has(> div) {
		outline: 1px solid #9a9a9a;
	}
`;

export const Option = styled.div`
	width: 100%;
	height: 35px;
	line-height: 35px;
	padding: 0 20px;
	cursor: pointer;
	letter-spacing: 1px;

	:hover {
		background-color: #eaeaea;
	}
`;
