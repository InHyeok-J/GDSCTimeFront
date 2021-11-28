import { createAction, handleActions } from 'redux-actions';
import * as boardApi from '../api/boardApi';
import * as likeApi from '../api/likeApi';
import { pender } from 'redux-pender';

export const INIT_BOARD = 'board/INIT_BOARD';
const INIT_CREATE_BOARD = 'board/INIT_CREATE_BOARD';
const GET_BOARD_LIST = 'board/GET_BOARD_LIST';
const GET_BOARD_DETAIL = 'board/GET_BOARD_DETAIL';
const GET_BOARD_COMMENT = 'comment/GET_BOARD_COMMENT';
const POST_BOARD = 'board/POST_BOARD';
const POST_COMMENT = 'comment/POST_COMMENT';
const INIT_POST_BOARD = 'board/INIT_POST_BOARD';
const INIT_POST_COMMENT = 'comment/INIT_POST_COMMENT';
const POST_LIKE = 'like/POST_LIKE';

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
export const likeAction = createAction(POST_LIKE, likeApi.like);
export const initPostBoard = createAction(INIT_POST_BOARD);
export const initPostComment = createAction(INIT_POST_COMMENT);

const initialState = {
    boardlist: null,
    boarddetail: null,
    boardcomment: null,
    postboard: null,
    postlike: null,
    postcomment: null,
    error: null,
};

export default handleActions(
    {
        [INIT_POST_BOARD]: (state) => ({
            ...state,
            postboard: null,
        }),
        [INIT_POST_COMMENT]: (state) => ({
            ...state,
            postcomment: null,
        }),
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
            onSuccess: (state, { payload }) => ({
                ...state,
                postcomment: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: POST_LIKE,
            onSuccess: (state, { payload }) => ({
                ...state,
                postlike: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
    },
    initialState,
);
