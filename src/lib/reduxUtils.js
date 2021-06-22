export const authThunk = (type, fetch) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return async (dispatch, getState, { history }) => {
    dispatch({ type });
    try {
      const payload = await fetch();
      if (type === 'auth/LOGIN') {
        // 로그인
        dispatch({ type: SUCCESS, payload });
      } else {
        // 회원가입
        dispatch({ type: SUCCESS });
        alert(payload);
      }
      history.push('/');
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const logoutThunk = (type, fetch) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return async (dispatch) => {
    dispatch({ type });
    try {
      await fetch();
      dispatch({ type: SUCCESS });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const autoLoginThunk = (type, fetch) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return async (dispatch) => {
    dispatch({ type });
    try {
      const payload = await fetch();
      dispatch({ type: SUCCESS, payload });
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const writeThunk = (type, fetch) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return async (dispatch, getState, { history }) => {
    dispatch({ type });
    try {
      const id = await fetch();
      dispatch({ type: SUCCESS });
      console.log('write thunk', id);
      history.push(`/posts/${id}`);
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};
