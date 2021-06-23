import { readPostList } from 'modules/postList';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import PostList from '../../components/posts/PostList';

const PostListContainer = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    const pageId = match.params.pageId || 1;
    dispatch(readPostList(pageId));
  }, [dispatch, match.params]);

  const { user } = useSelector(({ auth }) => ({
    user: auth.user.user,
  }));
  const { postList } = useSelector(({ postList }) => ({
    postList: postList.postList,
  }));
  console.log(user, postList);
  return <PostList user={user} postList={postList} />;
};

export default PostListContainer;
