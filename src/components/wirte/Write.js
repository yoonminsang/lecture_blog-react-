import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Unauthorized from '../common/Unauthorized';
import oc from 'open-color';
import Button from 'components/common/Button';

const WriteBlock = styled.div`
  width: 81.25rem;
  margin: 1rem auto;
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.875rem;
  }
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    border: none;
    outline: 0 none;
  }
`;
const Title = styled.div`
  height: 3rem;
  border-bottom: 1px solid ${oc.gray[4]};
  margin-bottom: 2rem;
  textarea {
    font-size: 1.875rem;
    font-weight: bold;
  }
`;
const Content = styled.div`
  height: 50rem;
  textarea {
    font-size: 1rem;
  }
`;
const Flex = styled.div`
  display: flex;
`;
const SaveButton = styled(Button)`
  margin-left: auto;
  font-size: 1.25rem;
`;
const Write = ({
  user,
  userLoading,
  writeLoading,
  input,
  onChange,
  titleRef,
  onSubmit,
}) => {
  if (userLoading) return null;
  else if (!user || user.grade !== 'manager') return <Unauthorized />;
  const { title, content } = input;
  return (
    <WriteBlock>
      <h1>
        <Link to="/">React Blog</Link>
      </h1>
      <Title>
        <textarea
          ref={titleRef}
          placeholder="제목을 입력하세요"
          value={title}
          onChange={onChange}
          name="title"
          maxLength="50"
        ></textarea>
      </Title>
      <Content>
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={onChange}
          name="content"
        ></textarea>
      </Content>
      <Flex>
        <SaveButton
          gray
          radius="true"
          onClick={onSubmit}
          disabled={writeLoading}
        >
          저장
        </SaveButton>
      </Flex>
    </WriteBlock>
  );
};

export default Write;
