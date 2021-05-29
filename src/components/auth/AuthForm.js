import oc from 'open-color';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';

const AuthFormBlock = styled.div``;
const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  padding-bottom: 0.5rem;
  outline: 0;
  border-bottom: 1px solid ${oc.gray[5]};
  &:focus {
    border-bottom: 1px solid ${oc.gray[9]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const MarginButton = styled(Button)`
  margin-top: 1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${oc.gray[5]};
    border-bottom: 1px solid ${oc.gray[5]};
    &:hover {
      color: ${oc.gray[9]};
      border-bottom: 1px solid ${oc.gray[9]};
    }
  }
`;

const AuthForm = ({ type, input, onChange, onSubmit }) => {
  const text = type === 'login' ? '로그인' : '회원가입';
  const { email, password, passwordConfirm } = input;
  return (
    <>
      <AuthFormBlock>
        <form onSubmit={onSubmit}>
          <Input
            placeholder="이메일"
            name="email"
            value={email}
            onChange={onChange}
          />
          <Input
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={onChange}
          />
          {type === 'register' && (
            <Input
              placeholder="비밀번호 확인"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChange}
            />
          )}
          <MarginButton blue fullWidth>
            {text}
          </MarginButton>
          <Footer>
            {type === 'login' ? (
              <Link to="/register">회원가입</Link>
            ) : (
              <Link to="/login">로그인</Link>
            )}
          </Footer>
        </form>
      </AuthFormBlock>
    </>
  );
};

export default AuthForm;
