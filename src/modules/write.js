import { handleActions } from 'redux-actions';
import { writeThunk } from '../lib/reduxUtils';
import * as writeAPI from 'lib/api/write';

const WRITE = 'write/WRITE';
const WRITE_SUCCESS = 'write/WRITE_SUCCESS';
const WRITE_ERROR = 'write/WRITE_ERROR';
// const UPDATE='write/UPDATE'
// const UPDATE_SUCCESS='write/UPDATE_SUCCESS'
// const UPDATE_ERROR='write/UPDATE_ERROR'

export const writePost = (title, content) =>
  writeThunk(WRITE, () => writeAPI.write(title, content));

const initialState = {
  write: {
    loading: false,
    error: null,
  },
  update: { loading: false, error: null },
};

const write = handleActions(
  {
    [WRITE]: (state) => ({
      ...state,
      write: {
        loading: true,
        error: null,
      },
    }),
    [WRITE_SUCCESS]: (state) => ({
      ...state,
      write: {
        loading: false,
        error: null,
      },
    }),
    [WRITE_ERROR]: (state, { payload: error }) => ({
      ...state,
      write: {
        loading: false,
        error,
      },
    }),
  },
  initialState
);

export default write;
