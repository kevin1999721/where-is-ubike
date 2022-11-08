import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

const isNotProduction = process.env.NODE_ENV !== 'production';

const middlewares = [isNotProduction && logger, thunk].filter(Boolean);

const composeEnhancers =
	(isNotProduction && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
	rootReducer,
	undefined,
	composeEnhancers(applyMiddleware(...middlewares))
);
