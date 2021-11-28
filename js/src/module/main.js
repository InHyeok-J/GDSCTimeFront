import { createAction, handleActions } from 'redux-actions';
import * as boardApi from '../api/boardApi';
import { pender } from 'redux-pender';

const GET_MAIN_MYBOARD = 'main/GET_MAIN_MYBOARD';
const GET_MAIN_HOT = 'main/GET_MAIN_HOT';
const GET_MAIN_REALTIME = 'main/GET_MAIN_REALTIME';
const GET_MAIN_FILTER_PUBLIC = 'main/GET_MAIN_FILTER_PUBLIC';
const GET_MAIN_FILTER_PROMOTION = 'main/GET_MAIN_FILTER_PROMOTION';

export const getMainMyBoardAction = createAction(
    GET_MAIN_MYBOARD,
    boardApi.getMainMyBoard,
);
export const getMainHotAction = createAction(GET_MAIN_HOT, boardApi.getMainHot);
export const getMainRealTimeAction = createAction(
    GET_MAIN_REALTIME,
    boardApi.getMainRealTime,
);
export const getMainPublicAction = createAction(
    GET_MAIN_FILTER_PUBLIC,
    boardApi.getMainFilterByCategory,
);
export const getMainPromotionAction = createAction(
    GET_MAIN_FILTER_PROMOTION,
    boardApi.getMainFilterByCategory,
);

const initialState = {
    mainmyboard: null,
    mainhot: null,
    mainrealytime: null,
    mainpublic: null,
    mainpromotion: null,
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
        ...pender({
            type: GET_MAIN_HOT,
            onSuccess: (state, { payload }) => ({
                ...state,
                mainhot: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: GET_MAIN_REALTIME,
            onSuccess: (state, { payload }) => ({
                ...state,
                mainrealytime: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: GET_MAIN_FILTER_PUBLIC,
            onSuccess: (state, { payload }) => ({
                ...state,
                mainpublic: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: GET_MAIN_FILTER_PROMOTION,
            onSuccess: (state, { payload }) => ({
                ...state,
                mainpromotion: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
    },
    initialState,
);
