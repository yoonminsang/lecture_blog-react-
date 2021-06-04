import { createAction, handleActions } from 'redux-actions';

const LOGIN = 'auth/LOGIN';
const LOGOUT = 'auth/LOGOUT';

export const login = createAction(LOGIN, (user) => user);
export const logout = createAction(LOGOUT);

const initialState = {
  user: null,
};

const auth = handleActions(
  {
    [LOGIN]: (state) => state,
    [LOGOUT]: (state) => state,
  },
  initialState
);

export default auth;
