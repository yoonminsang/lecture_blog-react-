import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_ERROR = 'auth/LOGIN_ERROR';
const LOGOUT = 'auth/LOGOUT';
const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_ERROR = 'auth/REGISTER_ERROR';
const AUTO_LOGIN = 'auh/AUTOLOGIN';
const AUTO_LOGIN_SUCCESS = 'auth/AUTO_LOGIN_SUCCESS';
const AUTO_LOGIN_FAIL = 'auth/LOGIN_FAIL';

export const login =
  (email, password) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: LOGIN });
    try {
      const res = await axios({
        method: 'post',
        url: '/auth/login',
        data: { email, password },
      });
      const { user } = res.data;
      dispatch({ type: LOGIN_SUCCESS });
      dispatch({ type: AUTO_LOGIN_SUCCESS, payload: user });
      history.push('/');
    } catch (e) {
      const error =
        e.response.status === 409 ? '아이디 또는 비밀번호가 틀립니다' : e;
      dispatch({ type: LOGIN_ERROR, payload: error });
    }
  };

// 로딩 구현 안함. 어차피 나중에 리팩토링
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  try {
    await axios.get('/auth/logout');
    dispatch({ type: AUTO_LOGIN_FAIL });
  } catch (e) {
    console.error(e);
  }
};

export const register =
  (email, password) =>
  async (dispatch, getState, { history }) => {
    dispatch({ type: REGISTER });
    try {
      const res = await axios({
        method: 'post',
        url: '/auth/register',
        data: { email, password },
      });
      if (res.status === 200) {
        dispatch({ type: REGISTER_SUCCESS });
        alert('회원가입을 축하합니다.');
        history.push('/');
      }
    } catch (e) {
      const error = e.response.status === 409 ? '아이디가 존재합니다' : e;
      dispatch({ type: REGISTER_ERROR, payload: error });
    }
  };

export const autoLogin = () => async (dispatch) => {
  dispatch({ type: AUTO_LOGIN });
  try {
    const res = await axios.get('/auth');
    dispatch({ type: AUTO_LOGIN_SUCCESS, payload: res.user });
  } catch (e) {
    const error =
      e.response.status === 409 ? '자동 로그인 되어있지 않습니다' : e;
    dispatch({ type: AUTO_LOGIN_FAIL, payload: error });
  }
};

const initialState = {
  login: {
    user: null,
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
        // user: null,
        loading: true,
        error: null,
      },
    }),
    [LOGIN_SUCCESS]: (state) => ({
      ...state,
      login: {
        loading: false,
        error: null,
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
    [AUTO_LOGIN_FAIL]: (state, { payload: error }) => ({
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
