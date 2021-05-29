import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const Empty = styled.div`
  height: 4.375rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Flex>
          <Left>
            <h1>
              <Link to="/">React Blog</Link>
            </h1>
          </Left>
          <Right></Right>
        </Flex>
      </HeaderBlock>
      <Empty></Empty>
    </>
  );
};

export default Header;
