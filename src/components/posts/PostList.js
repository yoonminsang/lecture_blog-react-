import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const PostListBlock = styled.div`
  width: 81.25rem;
  height: 700px;
  margin: 1rem auto;
`;

const Flex = styled.div`
  display: flex;
`;
const WriteButton = styled(Button)`
  margin-left: auto;
`;
const Grid = styled.div`
  display: grid;
`;

const PostList = ({ user, postList }) => {
  return (
    <>
      <PostListBlock>
        {user && user.grade === 'manager' && (
          <Flex>
            <WriteButton to="/write" blue="true">
              글쓰기
            </WriteButton>
          </Flex>
        )}
      </PostListBlock>
    </>
  );
};

export default PostList;
