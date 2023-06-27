import { combineReducers } from 'redux';
import { bikeReducer } from './bike/bike.reducer';
import { userReducer } from './user/user.reducer';

const rootReducer = combineReducers({ bike: bikeReducer, user: userReducer });

export default rootReducer;
