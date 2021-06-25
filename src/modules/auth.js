import { handleActions } from 'redux-actions';
import { authThunk, autoLoginThunk, logoutThunk } from '../lib/reduxUtils';
import * as authAPI from 'lib/api/auth';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_ERROR = 'auth/LOGIN_ERROR';
const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_ERROR = 'auth/LOGOUT_ERROR';
const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_ERROR = 'auth/REGISTER_ERROR';
const AUTO_LOGIN = 'auth/AUTO_LOGIN';
const AUTO_LOGIN_SUCCESS = 'auth/AUTO_LOGIN_SUCCESS';
const AUTO_LOGIN_ERROR = 'auth/AUTO_LOGIN_ERROR';

export const login = (email, password) =>
  authThunk(LOGIN, () => authAPI.login(email, password));

export const logout = () => logoutThunk(LOGOUT, () => authAPI.logout());

export const register = (email, password) =>
  authThunk(REGISTER, () => authAPI.register(email, password));

export const autoLogin = () =>
  autoLoginThunk(AUTO_LOGIN, () => authAPI.autoLogin());

const initialState = {
  login: {
    loading: false,
    error: null,
  },
  register: {
    loading: false,
    error: null,
  },
  user: {
    user: undefined,
    loading: false,
    error: null,
  },
};

const auth = handleActions(
  {
    [LOGIN]: (state) => ({
      ...state,
      login: {
        loading: true,
        error: null,
      },
    }),
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      login: {
        loading: false,
        error: null,
      },
      user: {
        user,
      },
    }),
    [LOGIN_ERROR]: (state, { payload: error }) => ({
      ...state,
      login: {
        loading: false,
        error,
      },
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: {
        ...state.user,
        loading: true,
        error: null,
      },
    }),
    [LOGOUT_SUCCESS]: (state) => ({
      ...state,
      user: {
        user: null,
        loading: false,
        error: null,
      },
    }),
    [LOGOUT_ERROR]: (state) => ({
      ...state,
      user: {
        ...state.user,
        loading: false,
        error: null,
      },
    }),
    [REGISTER]: (state) => ({
      ...state,
      register: {
        loading: true,
        error: null,
      },
    }),
    [REGISTER_SUCCESS]: (state) => ({
      ...state,
      register: {
        loading: false,
        error: null,
      },
    }),
    [REGISTER_ERROR]: (state, { payload: error }) => ({
      ...state,
      register: {
        loading: false,
        error,
      },
    }),
    [AUTO_LOGIN]: (state) => ({
      ...state,
      user: {
        user: undefined,
        loading: true,
        error: null,
      },
    }),
    [AUTO_LOGIN_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user: {
        user,
        loading: false,
        error: null,
      },
    }),
    [AUTO_LOGIN_ERROR]: (state, { payload: error }) => ({
      ...state,
      user: {
        user: null,
        loading: false,
        error,
      },
    }),
  },
  initialState
);

export default auth;
