import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import Lottie from 'lottie-web';

import userLocation from '../../assets/icon/youbike-gps.json';

import { UserLocationContainer } from './user-location.style';

const UserLocation = (props, ref) => {
	const locationContainerRef = useRef(null);

	useImperativeHandle(ref, () => locationContainerRef.current, []);
	useEffect(() => {
		Lottie.loadAnimation({
			container: locationContainerRef.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: userLocation,
		});

		return () => {
			Lottie.destroy();
		};
	}, []);

	return <UserLocationContainer ref={locationContainerRef} />;
};

export default forwardRef(UserLocation);
