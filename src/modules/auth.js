import axios from 'axios';
import { handleActions } from 'redux-actions';
import { authThunk } from '../lib/reduxUtils';
import * as authAPI from '../api/auth';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_ERROR = 'auth/LOGIN_ERROR';
const LOGOUT = 'auth/LOGOUT';
const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_ERROR = 'auth/REGISTER_ERROR';
const AUTO_LOGIN = 'auh/AUTOLOGIN';
const AUTO_LOGIN_SUCCESS = 'auth/AUTO_LOGIN_SUCCESS';
const AUTO_LOGIN_ERROR = 'auth/AUTO_LOGIN_ERROR';

export const login = (email, password) =>
  authThunk(LOGIN, () => authAPI.login(email, password));

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  try {
    await axios.get('/auth/logout');
    dispatch({ type: AUTO_LOGIN_ERROR });
  } catch (e) {
    console.error(e);
  }
};

export const register = (email, password) =>
  authThunk(REGISTER, () => authAPI.register(email, password));

export const autoLogin = () => async (dispatch) => {
  dispatch({ type: AUTO_LOGIN });
  try {
    const res = await axios.get('/auth');
    dispatch({ type: AUTO_LOGIN_SUCCESS, payload: res.data.user });
  } catch (e) {
    const error = e.response.status === 401 ? '자동 로그인 실패' : e;
    dispatch({ type: AUTO_LOGIN_ERROR, payload: error });
  }
};

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
    user: null,
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
        user: null,
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
        user: null,
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
