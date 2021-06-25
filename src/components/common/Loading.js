import React from 'react';
import styled from 'styled-components';

const LoadingBlock = styled.div`
  width: 100%;
  height: 43.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = () => {
  return (
    <>
      <LoadingBlock>
        <span>Loading...</span>
      </LoadingBlock>
    </>
  );
};

export default Loading;
