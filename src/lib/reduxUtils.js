export const authThunk = (type, fetch) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return async (dispatch, getState, { history }) => {
    dispatch({ type });
    try {
      const payload = await fetch();
      if (type === 'auth/LOGIN') {
        dispatch({ type: SUCCESS, payload });
      } else {
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
