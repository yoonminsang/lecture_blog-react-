import React, { useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState(null);
  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm } = input;
    if (email === '') {
      setError('이메일을 입력하세요');
      setErrorType('email');
    } else if (password === '') {
      setError('비밀번호를 입력하세요');
      setErrorType('password');
    } else if (passwordConfirm === '') {
      setError('비밀번호 확인을 입력하세요');
      setErrorType('passwordConfirm');
    } else if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다');
      setErrorType('password');
      setInput({ ...input, password: '', passwordConfirm: '' });
    } else {
      // 서버에 보내기
    }
  };

  return (
    <AuthForm
      type="register"
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      errorType={errorType}
    />
  );
};

export default RegisterForm;
