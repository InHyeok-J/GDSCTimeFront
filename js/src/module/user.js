import { createAction, handleActions } from 'redux-actions';
import * as userApi from '../api/userApi';
import { pender } from 'redux-pender';

const INIT_USER = 'user/INIT_USER';
const INIT_SIGNUP = 'user/INIT_SIGNUP';
const SIGNUP = 'user/SIGNUP';
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';
const GET_USER = 'user/GET_USER';
const CHANGE_NICKNAME = 'user/CHANGE_NICKNAME';

export const signUpAction = createAction(SIGNUP, userApi.signUp);
export const signUpCleanAction = createAction(INIT_SIGNUP);
export const loginAction = createAction(LOGIN, userApi.login);
export const logoutAction = createAction(LOGOUT, userApi.logout);
export const userCleanAction = createAction(INIT_USER);
export const getUserAction = createAction(GET_USER, userApi.getUser);
export const changeNicknameAction = createAction(
    CHANGE_NICKNAME,
    userApi.changeNickname,
);

const initialState = {
    signup: null,
    logout: null,
    user: null,
    error: null,
};

export default handleActions(
    {
        [INIT_SIGNUP]: (state) => ({
            ...state,
            sginup: initialState.signup,
        }),
        [INIT_USER]: (state) => ({
            ...state,
            user: initialState.user,
        }),
        ...pender({
            type: SIGNUP,
            onSuccess: (state, { payload }) => ({
                ...state,
                signup: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: LOGIN,
            onPending: (state, action) => {
                console.log(action);
            },
            onSuccess: (state, action) => {
                return {
                    ...state,
                    user: action.payload,
                };
            },
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
            }),
        }),
        ...pender({
            type: LOGOUT,
            onSuccess: (state, { payload }) => ({
                ...state,
                user: null,
            }),
        }),
        ...pender({
            type: GET_USER,
            onSuccess: (state, { payload }) => ({
                ...state,
                user: payload,
            }),
            onFailure: (state, { payload }) => ({
                ...state,
                error: payload,
                user: null,
            }),
        }),
    },
    initialState,
);
