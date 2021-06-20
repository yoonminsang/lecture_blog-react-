import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const PostListBlock = styled.div`
  width: 81.25rem;
  height: 700px;
  margin: 1rem auto;
`;

// const WriteButton = styled(Button)``;

const PostList = ({ user }) => {
  return (
    <>
      <PostListBlock>
        {user && user.grade === 'manager' && (
          <Button to="/write" blue="true">
            글쓰기
          </Button>
        )}
      </PostListBlock>
    </>
  );
};

export default PostList;
