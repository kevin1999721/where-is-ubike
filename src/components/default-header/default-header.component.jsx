import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../logo/logo.component';
import { ReactComponent as BackIcon } from '../../assets/icon/back.svg';

import {
	DefaultHeaderContainer,
	HeaderItemsContainer,
	BackIconContainer,
} from './default-header.style';

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const onWindowResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', onWindowResize);
		return () => {
			window.removeEventListener('resize', onWindowResize);
		};
	});

	return windowSize;
};

const DefaultHeader = ({ children }) => {
	const windowSize = useWindowSize();
	let HomeIcon = null;

	if (windowSize.width > 768) {
		HomeIcon = Logo;
	} else {
		HomeIcon = () => {
			return (
				<BackIconContainer>
					<BackIcon />
				</BackIconContainer>
			);
		};
	}

	return (
		<DefaultHeaderContainer>
			<HeaderItemsContainer>
				{}
				<Link to={'/'}>
					<HomeIcon />
				</Link>
				{children}
			</HeaderItemsContainer>
		</DefaultHeaderContainer>
	);
};

export default DefaultHeader;
