import { BIKE_ACTION_TYPE } from './bike.type';
import { createAction } from '../../utils/reducer/reducer.utils';
import { fetchAllCitiesBikeData } from '../../utils/tdx/tdx-bike.utils';

const fetchBikeStationsStart = () => createAction(BIKE_ACTION_TYPE.SET_FETCH_BIKE_STATIONS_START);

const fetchBikeStationsSuccess = bikeStations =>
	createAction(BIKE_ACTION_TYPE.SET_FETCH_BIKE_STATIONS_SUCCESS, bikeStations);

const fetchBikeStationsFailure = error =>
	createAction(BIKE_ACTION_TYPE.SET_FETCH_BIKE_STATIONS_FAILURE, error);

const fetchBikeAvailabilityStart = () =>
	createAction(BIKE_ACTION_TYPE.SET_FETCH_BIKE_AVAILABILITY_START);

const fetchBikeAvailabilitySuccess = bikeAvailability =>
	createAction(BIKE_ACTION_TYPE.SET_FETCH_BIKE_AVAILABILITY_SUCCESS, bikeAvailability);

const fetchBikeAvailabilityFailure = error =>
	createAction(BIKE_ACTION_TYPE.SET_FETCH_BIKE_AVAILABILITY_FAILURE, error);

const fetchBikeLanesStart = () => createAction(BIKE_ACTION_TYPE.SET_FETCH_BIKE_LANES_START);

const fetchBikeLanesSuccess = bikeLanes =>
	createAction(BIKE_ACTION_TYPE.SET_FETCH_BIKE_LANES_SUCCESS, bikeLanes);

const fetchBikeLanesFailure = error =>
	createAction(BIKE_ACTION_TYPE.SET_FETCH_BIKE_LANES_FAILURE, error);

export const fetchAllBikeStations = bikeApiType => {
	return async dispatch => {
		dispatch(fetchBikeStationsStart());
		try {
			const bikeStations = await fetchAllCitiesBikeData(bikeApiType);
			dispatch(fetchBikeStationsSuccess(bikeStations));
		} catch (error) {
			dispatch(fetchBikeStationsFailure(error));
		}
	};
};

export const fetchAllBikeAvailability = bikeApiType => {
	return async dispatch => {
		dispatch(fetchBikeAvailabilityStart());
		try {
			const bikeStations = await fetchAllCitiesBikeData(bikeApiType);
			dispatch(fetchBikeAvailabilitySuccess(bikeStations));
		} catch (error) {
			dispatch(fetchBikeAvailabilityFailure(error));
		}
	};
};

export const fetchAllBikeLanes = bikeApiType => {
	return async dispatch => {
		dispatch(fetchBikeLanesStart());
		try {
			const bikeStations = await fetchAllCitiesBikeData(bikeApiType);
			dispatch(fetchBikeLanesSuccess(bikeStations));
		} catch (error) {
			dispatch(fetchBikeLanesFailure(error));
		}
	};
};
