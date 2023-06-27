import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

export const NavLink = styled(Link)`
	max-width: 250px;
	padding: 10px 0;
	height: 50px;
	border: 2px solid #000000;
	border-radius: 10px;
	line-height: 30px;
	font-size: 16px;
	text-align: center;
`;
