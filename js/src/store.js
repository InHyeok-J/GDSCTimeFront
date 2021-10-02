import { createStore, applyMiddleware, compose } from 'redux';
import penderMiddleware from 'redux-pender';
import logger from 'redux-logger';
import rootReducer from './module';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(penderMiddleware(), logger)),
);

export default store;
