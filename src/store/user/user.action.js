import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPE } from './user.type';

export const setUserGeolocation = userGeolocation =>
	createAction(USER_ACTION_TYPE.SET_USER_GEOLOCATION, userGeolocation);
