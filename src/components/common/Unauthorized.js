import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const UnauthorizedBlock = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #f1f3f5;
  align-items: center;
  justify-content: center;
  a {
    margin-top: 1rem;
    text-align: center;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Unauthorized = () => {
  return (
    <>
      <UnauthorizedBlock>
        <Flex>
          <h1>권한이 없습니다</h1>
          <Button to="/" gray="true" fullWidth="true">
            Home
          </Button>
        </Flex>
      </UnauthorizedBlock>
    </>
  );
};

export default Unauthorized;
