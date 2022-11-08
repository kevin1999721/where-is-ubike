import { useEffect } from 'react';

import Lottie from 'lottie-web';
import bikeLoaderJson from '../../assets/icon/youbike.json';

import { LoaderContainer } from './bike-loader.style';

const BikeLoader = () => {
	useEffect(() => {
		Lottie.loadAnimation({
			container: document.querySelector(`.${LoaderContainer.styledComponentId}`),
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: bikeLoaderJson,
		});

		return () => {
			Lottie.destroy();
		};
	}, []);

	return <LoaderContainer />;
};

export default BikeLoader;
