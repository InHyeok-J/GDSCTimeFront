import { createAction, handleActions } from 'redux-actions';
import * as boardApi from '../api/boardApi';
import { pender } from 'redux-pender';

const GET_MAIN_MYBOARD = 'main/GET_MAIN_MYBOARD';

export const getMainMyBoardAction = createAction(
    GET_MAIN_MYBOARD,
    boardApi.getMainMyBoard,
);

const initialState = {
    mainmyboard: null,
    error: null,
};

export default handleActions(
    {
        ...pender({
            type: GET_MAIN_MYBOARD,
            onSuccess: (state, { payload }) => ({
                ...state,
                mainmyboard: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
    },
    initialState,
);
