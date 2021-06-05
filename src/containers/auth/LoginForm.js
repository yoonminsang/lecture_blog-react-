import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { login } from '../../modules/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState(null);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = input;
    if (email === '') {
      setError('이메일을 입력하세요');
      setErrorType('email');
    } else if (password === '') {
      setError('비밀번호를 입력하세요');
      setErrorType('password');
    } else {
      // 서버에 보내기
      dispatch(login(email, password));
    }
  };

  return (
    <AuthForm
      type="login"
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      errorType={errorType}
    />
  );
};

export default LoginForm;
