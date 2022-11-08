import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './router/home/home.component';
import BikeStations from './router/bike-stations/bike-stations.component';
import BikeLanes from './router/bike-lanes/bike-lanes.component';
import Tourisms from './router/tourisms/tourisms.style';

import './App.css';

function App() {
	// navigator.geolocation.getCurrentPosition(function (position) {
	// 	console.log(position.coords.latitude, position.coords.longitude);
	// });
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchAllBikeStations());
	// }, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/bikeStations" element={<BikeStations />}></Route>
				<Route path="/bikeLanes" element={<BikeLanes />}></Route>
				<Route path="/tourisms" element={<Tourisms />}></Route>
			</Routes>
		</div>
	);
}

export default App;
