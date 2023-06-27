import { USER_ACTION_TYPE } from './user.type';

const INITIAL_STATE = {
	userGeolocation: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_ACTION_TYPE.SET_USER_GEOLOCATION:
			return {
				...state,
				userGeolocation: action.payload,
			};

		default:
			return state;
	}
};
