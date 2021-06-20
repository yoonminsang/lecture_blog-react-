import React from 'react';
import { useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';

const PostListContainer = () => {
  const { user } = useSelector(({ auth }) => ({
    user: auth.user.user,
  }));
  return <PostList user={user} />;
};

export default PostListContainer;
