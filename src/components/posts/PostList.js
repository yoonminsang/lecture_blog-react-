import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import oc from 'open-color';

const PostListBlock = styled.div`
  width: 81.25rem;
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const Post = styled.div`
  width: 18.75rem;
  margin: 1rem;
  border: 1px solid ${oc.gray[2]};
  border-radius: 1rem;
  transition: transform 0.25s ease-in 0s;
  :hover {
    transform: translateY(-8px);
  }
`;
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .title {
    font-size: 1rem;
    margin-bottom: 0.25rem;
    line-height: 1.5;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: rgb(33, 37, 41);
  }
  .content {
    margin: 0px 0px 1.5rem;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    height: 3.9375rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgb(73, 80, 87);
  }
  span {
    font-size: 0.75rem;
    line-height: 1.5;
    color: rgb(134, 142, 150);
  }
  .user {
    border-top: 1px solid rgb(248, 249, 250);
    margin-top: 0.5rem;
  }
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
        <Grid>
          {postList &&
            postList.map((post) => (
              <Post key={post.id}>
                <ColumnFlex>
                  <Link to={`/posts/${post.id}`}>
                    <h4 className="title">{post.title}</h4>
                    <div className="content">{post.content}</div>
                  </Link>
                  <span className="created">{post.created}</span>
                  <span className="user">
                    by <b>{post.email}</b>
                  </span>
                </ColumnFlex>
              </Post>
            ))}
        </Grid>
      </PostListBlock>
    </>
  );
};

export default PostList;
