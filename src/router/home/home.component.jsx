import BikeLoader from '../../components/bike-loader/bike-loader.component';
import Logo from '../../components/logo/logo.component';
import Navigation from '../navigation/navigation.component';
import Copyright from '../../components/copyright/copyright.component';

import {
	HomeContainer,
	LogoContainer,
	HomeBodyContainer,
	LogoText,
	HomeFooterContainer,
} from './home.style';

const Home = () => {
	return (
		<HomeContainer>
			<HomeBodyContainer>
				<LogoContainer>
					<BikeLoader />
					<Logo />
					<LogoText>微笑單車．暢遊城市</LogoText>
				</LogoContainer>
				<Navigation />
			</HomeBodyContainer>
			<HomeFooterContainer>
				<Copyright />
			</HomeFooterContainer>
		</HomeContainer>
	);
};

export default Home;
