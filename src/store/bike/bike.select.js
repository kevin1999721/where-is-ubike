import { createSelector } from 'reselect';

const selectBike = state => state.bike;

export const selectIsLoading = createSelector([selectBike], bike => bike.isLoading);

export const selectBikeStations = createSelector([selectBike], bike => {
	if (!bike.bikeStations) return;
	const bikeStationsSlice = bike.bikeStations.map(station => {
		let { Zh_tw: stationZhName, En: stationEhName } = station.StationName;
		if (stationZhName.indexOf('YouBike1.0_') >= 0 || stationZhName.indexOf('YouBike2.0_') >= 0) {
			stationZhName = stationZhName.slice(11);
			stationEhName = stationEhName.slice(11);
		}
		return { ...station, StationName: { Zh_tw: stationZhName, En: stationEhName } };
	});

	return bikeStationsSlice;
});

export const selectBikeAvailability = createSelector([selectBike], bike => bike.bikeAvailability);

export const selectBikeStationAvailability = createSelector(
	[selectBikeStations, selectBikeAvailability],
	(bikeStations, bikeAvailability) => {
		if (!bikeStations || !bikeAvailability) return null;

		const bikeStaionsObejct = bikeStations.reduce((acc, cur) => {
			acc[cur.StationUID] = cur;
			return acc;
		}, {});

		const bikeAvailabilitySlice = bikeAvailability.map(item => {
			const bikeStaion = bikeStaionsObejct[item.StationUID];
			return {
				...bikeStaion,
				AvailableRentBikes: item.AvailableRentBikes,
				AvailableReturnBikes: item.AvailableReturnBikes,
			};
		});

		return bikeAvailabilitySlice;
	}
);

export const selectBikeLanes = createSelector([selectBike], bike => {
	if (!bike.bikeLanes) return null;
	const bikeLanesSlice = bike.bikeLanes.map(item => {
		const { Geometry: geometryString } = item;
		let geometryArray = [];

		geometryArray = geometryString
			.slice(geometryString.indexOf('((') + 2, geometryString.indexOf('))'))
			.split('),(');

		geometryArray = geometryArray.map(item => {
			return item.split(',');
		});

		geometryArray = geometryArray.map(item => {
			return item.map(t => {
				return t
					.split(' ')
					.map(itemString => {
						return +itemString;
					})
					.reverse();
			});
		});

		return { ...item, Geometry: geometryArray };
	});
	return bikeLanesSlice;
});
