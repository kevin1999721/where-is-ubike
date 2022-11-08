import { combineReducers } from 'redux';
import { bikeReducer } from './bike/bike.reducer';

const rootReducer = combineReducers({ bike: bikeReducer });

export default rootReducer;
