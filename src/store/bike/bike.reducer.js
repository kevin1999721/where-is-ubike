import { BIKE_ACTION_TYPE } from './bike.type';

const INITIAL_STATE = {
	isLoading: false,
	bikeLanes: null,
	bikeStations: null,
	bikeAvailability: null,
	error: null,
};

export const bikeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BIKE_ACTION_TYPE.SET_FETCH_BIKE_STATIONS_START:
		case BIKE_ACTION_TYPE.SET_FETCH_BIKE_AVAILABILITY_START:
		case BIKE_ACTION_TYPE.SET_FETCH_BIKE_LANES_START:
			return {
				...state,
				isLoading: true,
			};
		case BIKE_ACTION_TYPE.SET_FETCH_BIKE_STATIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				bikeStations: action.payload,
			};
		case BIKE_ACTION_TYPE.SET_FETCH_BIKE_AVAILABILITY_SUCCESS:
			return {
				...state,
				isLoading: false,
				bikeAvailability: action.payload,
			};
		case BIKE_ACTION_TYPE.SET_FETCH_BIKE_LANES_SUCCESS:
			return {
				...state,
				isLoading: false,
				bikeLanes: action.payload,
			};
		case BIKE_ACTION_TYPE.SET_FETCH_BIKE_STATIONS_FAILURE:
		case BIKE_ACTION_TYPE.SET_FETCH_BIKE_AVAILABILITY_FAILURE:
		case BIKE_ACTION_TYPE.SET_FETCH_BIKE_LANES_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
