import { handleActions } from 'redux-actions';
import { postListThunk } from '../lib/reduxUtils';
import * as postsAPI from 'lib/api/posts';

const POST_LIST = 'postList/POST_LIST';
const POST_LIST_SUCCESS = 'postList/POST_LIST_SUCCESS';
const POST_LIST_ERROR = 'postList/POST_LIST_ERROR';

export const readPostList = (pageId) =>
  postListThunk(POST_LIST, () => postsAPI.postList(pageId));

const initialState = {
  postList: null,
  loading: null,
  error: null,
};

const postList = handleActions(
  {
    [POST_LIST]: (state) => ({
      postList: null,
      loading: true,
      error: null,
    }),
    [POST_LIST_SUCCESS]: (state, { payload: postList }) => ({
      postList,
      loading: false,
      error: null,
    }),
    [POST_LIST_ERROR]: (state, { payload: error }) => ({
      postList: null,
      loading: false,
      error,
    }),
  },
  initialState
);

export default postList;
