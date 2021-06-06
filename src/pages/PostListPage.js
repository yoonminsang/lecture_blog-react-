import React from 'react';
import Footer from '../components/common/Footer';
import PostList from '../components/posts/PostList';
import HeaderContainer from '../containers/common/HeaderContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostList />
      <Footer />
    </>
  );
};

export default PostListPage;
