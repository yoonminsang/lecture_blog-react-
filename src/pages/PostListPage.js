import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import PostList from '../components/posts/PostList';

const PostListPage = () => {
  return (
    <>
      <Header />
      <PostList />
      <Footer />
    </>
  );
};

export default PostListPage;
