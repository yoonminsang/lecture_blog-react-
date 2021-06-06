import oc from 'open-color';
import React, { useEffect, useRef } from 'react';
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

const ErrorDiv = styled.div`
  color: red;
  text-align: center;
`;

const AuthForm = ({
  type,
  input,
  onChange,
  onSubmit,
  error,
  errorType,
  loading,
}) => {
  const emailRef = useRef(null);
  const passwardRef = useRef(null);
  const passwardConfirmRef = useRef(null);
  useEffect(() => {
    switch (errorType) {
      case 'email':
        return emailRef.current.focus();
      case 'password':
        return passwardRef.current.focus();
      case 'passwardConfirm':
        return passwardConfirmRef.current.focus();
    }
  }, [errorType]);
  const text = type === 'login' ? '로그인' : '회원가입';
  const { email, password, passwordConfirm } = input;
  return (
    <>
      {loading && <div>로딩</div>}
      <AuthFormBlock>
        <form onSubmit={onSubmit}>
          <Input
            ref={emailRef}
            placeholder="이메일"
            name="email"
            value={email}
            onChange={onChange}
          />
          <Input
            ref={passwardRef}
            placeholder="비밀번호"
            name="password"
            value={password}
            onChange={onChange}
            type="password"
          />
          {type === 'register' && (
            <Input
              ref={passwardConfirmRef}
              placeholder="비밀번호 확인"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={onChange}
              type="password"
            />
          )}
          {error && <ErrorDiv>{error}</ErrorDiv>}
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
