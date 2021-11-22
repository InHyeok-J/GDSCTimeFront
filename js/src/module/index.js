import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import user from './user';
import board from './board';
import main from './main';

const rootReducer = combineReducers({
    board,
    user,
    main,
    pender: penderReducer,
});

export default rootReducer;
