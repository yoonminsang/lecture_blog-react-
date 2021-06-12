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
        alert('회원가입을 축하합니다.');
      }
      history.push('/');
    } catch (error) {
      dispatch({ type: ERROR, payload: error.message });
    }
  };
};

export const logoutThunk = () => {};

// export const promiseThunk = (type, fetch) => {
//   const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
//   return async (dispatch, getState) => {
//     dispatch({ type });
//     try {
//       const payload = await fetch();
//       dispatch({ type: SUCCESS, payload });
//     } catch (error) {
//       dispatch({ type: ERROR, payload: error.message });
//     }
//   };
// };
