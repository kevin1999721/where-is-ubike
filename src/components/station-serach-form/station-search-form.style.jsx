import styled from 'styled-components';

export const SearchForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 0 10px;
	gap: 5px;
	position: absolute;
	top: 10px;
	left: 0;
	z-index: 10;
`;

export const SearchInputContainer = styled.div`
	flex-grow: 1;
	max-width: 450px;
	min-width: 250px;
	height: 45px;
	position: relative;
`;

export const SearchInput = styled.input`
	width: 100%;
	height: 100%;
	line-height: 45px;
	padding: 0px 20px;
	font-size: 17px;
	border: none;
	border-radius: 7px;
	box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
	letter-spacing: 1px;

	&::placeholder {
		color: #d2d2d2;
	}

	&:focus {
		outline: 1px solid #9a9a9a;
	}
`;

export const SearchButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 45px;
	height: 45px;
	border: none;
	outline: none;
	border-radius: 7px;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	background-color: #000000;

	&:active {
		transform: scale(0.97);
	}

	svg {
		path {
			fill: #ffffff;
		}
	}
`;
