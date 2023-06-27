import styled from 'styled-components';

export const BikeLaneNameContainer = styled.div`
	display: inline-block;
	font-size: 16px;
	padding: 0 3px;
	border-radius: 3px;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	cursor: pointer;

	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}

	@media (max-width: 450px) {
		max-width: 120px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;
