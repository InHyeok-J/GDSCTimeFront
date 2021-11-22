import { createAction, handleActions } from 'redux-actions';
import * as boardApi from '../api/boardApi';
import { pender } from 'redux-pender';

export const INIT_BOARD = 'board/INIT_BOARD';
const INIT_CREATE_BOARD = 'board/INIT_CREATE_BOARD';
const GET_BOARD_LIST = 'board/GET_BOARD_LIST';
const GET_BOARD_DETAIL = 'board/GET_BOARD_DETAIL';
const GET_BOARD_COMMENT = 'comment/GET_BOARD_COMMENT';
const POST_BOARD = 'board/POST_BOARD';
const POST_COMMENT = 'comment/POST_COMMENT';

export const getBoardListAction = createAction(
    GET_BOARD_LIST,
    boardApi.getBoardList,
);
export const getBoardDetailAction = createAction(
    GET_BOARD_DETAIL,
    boardApi.getBoardDetail,
);
export const getBoardCommentAction = createAction(
    GET_BOARD_COMMENT,
    boardApi.getBoardComment,
);
export const postBoardAction = createAction(POST_BOARD, boardApi.postBoard);
export const postCommentAction = createAction(
    POST_COMMENT,
    boardApi.postComment,
);

const initialState = {
    boardlist: null,
    boarddetail: null,
    boardcomment: null,
    postboard: null,
    postcomment: null,
    error: null,
};

export default handleActions(
    {
        [INIT_BOARD]: (state) => ({
            ...state,
            boardlist: null,
        }),
        ...pender({
            type: GET_BOARD_DETAIL,
            onSuccess: (state, { payload }) => ({
                ...state,
                boarddetail: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: GET_BOARD_LIST,
            onSuccess: (state, { payload }) => ({
                ...state,
                boardlist: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: GET_BOARD_COMMENT,
            onSuccess: (state, { payload }) => ({
                ...state,
                boardcomment: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: POST_BOARD,
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: POST_COMMENT,
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
    },
    initialState,
);
