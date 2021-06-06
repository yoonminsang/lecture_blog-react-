import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import { AiOutlineSearch } from 'react-icons/ai';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  border-bottom: 1px solid lightgray;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 62.5rem;
  height: 4.375rem;
  margin: 0 auto;
`;

const Left = styled.div`
  h1 {
    font-size: 1.5rem;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  div {
    margin-right: 1.5rem;
  }
`;

const SearchButton = styled.button`
  margin-right: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Empty = styled.div`
  height: 4.375rem;
`;

const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Flex>
          <Left>
            <h1>
              <Link to="/">React Blog</Link>
            </h1>
          </Left>
          <Right>
            <SearchButton>
              <AiOutlineSearch />
            </SearchButton>
            {user ? (
              <>
                <div>{user.email}</div>
                <Button gray="true" onClick={onLogout}>
                  로그아웃
                </Button>
              </>
            ) : (
              <Button to="/login" gray="true">
                로그인
              </Button>
            )}
          </Right>
        </Flex>
      </HeaderBlock>
      <Empty></Empty>
    </>
  );
};

export default Header;
