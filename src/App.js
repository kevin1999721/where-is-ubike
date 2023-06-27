import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { setUserGeolocation } from './store/user/user.action';

import Home from './router/home/home.component';
import BikeStations from './router/bike-stations/bike-stations.component';
import BikeLanes from './router/bike-lanes/bike-lanes.component';

import './App.css';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		const watchId = navigator.geolocation.watchPosition(
			position => {
				const {
					coords: { latitude, longitude },
				} = position;

				dispatch(setUserGeolocation({ latitude, longitude }));
			},
			reject => {
				dispatch(setUserGeolocation(null));
			}
		);

		return () => {
			navigator.geolocation.clearWatch(watchId);
			dispatch(setUserGeolocation(null));
		};
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/bikeStations" element={<BikeStations />}></Route>
				<Route path="/bikeLanes" element={<BikeLanes />}></Route>
			</Routes>
		</div>
	);
}

export default App;
