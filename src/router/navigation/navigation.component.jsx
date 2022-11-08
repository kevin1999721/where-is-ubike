import { NavigationContainer, NavLink } from './navigation.style';

const Navigation = () => {
	return (
		<NavigationContainer>
			<NavLink to={'/bikeStations'}>尋找 Youbike</NavLink>
			<NavLink to={'/bikeLanes'}>查詢自行車道</NavLink>
			<NavLink to={'/tourisms'}>附近景點、美食</NavLink>
		</NavigationContainer>
	);
};

export default Navigation;
