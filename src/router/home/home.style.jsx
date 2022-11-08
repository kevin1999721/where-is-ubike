import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-color: #fed801;
	position: relative;
`;

export const HomeBodyContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const LogoContainer = styled.div`
	margin-bottom: 75px;
`;

export const LogoText = styled.p`
	font-weight: 400;
	font-size: 13px;
	letter-spacing: 13px;
`;

export const HomeFooterContainer = styled.div`
	position: absolute;
	right: 40px;
	bottom: 20px;
`;
