import axios from 'axios';
import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_ERROR = 'auth/LOGIN_ERROR';
const LOGOUT = 'auth/LOGOUT';

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    const res = await axios({
      method: 'post',
      url: '/auth/login',
      data: { email, password },
    });
    const user = res.data;
    dispatch({ type: LOGIN_SUCCESS, user });
  } catch (e) {
    const error =
      e.response.status === 409 ? '아이디 또는 비밀번호가 틀립니다' : e;
    dispatch({ type: LOGIN_ERROR, error });
  }
};
// export const login = createAction(LOGIN, (user) => user);
export const logout = createAction(LOGOUT);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const auth = handleActions(
  {
    [LOGIN]: (state) => ({
      ...state,
      auth: {
        user: null,
        loadgin: true,
        error: null,
      },
    }),
    [LOGIN_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      auth: {
        user,
        loading: false,
        error: null,
      },
    }),
    [LOGIN_ERROR]: (state, { payload: e }) => ({
      ...state,
      auth: {
        user: null,
        loading: false,
        error: e,
      },
    }),
    [LOGOUT]: (state) => state,
  },
  initialState
);

export default auth;
