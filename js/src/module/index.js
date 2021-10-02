import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import user from './user';

const rootReducer = combineReducers({
    user,
    pender: penderReducer,
});

export default rootReducer;
