import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { login } from '../../modules/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { user, authError, loading, userLoading } = useSelector(({ auth }) => ({
    user: auth.user.user,
    authError: auth.login.error,
    loading: auth.login.loading,
    userLoading: auth.user.loading,
  }));
  useEffect(() => {
    setError(authError);
    if (authError) emailRef.current.focus();
  }, [authError]);
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = input;
    if (email === '') {
      setError('이메일을 입력하세요');
      emailRef.current.focus();
    } else if (password === '') {
      setError('비밀번호를 입력하세요');
      passwordRef.current.focus();
    } else {
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
      loading={loading}
      user={user}
      userLoading={userLoading}
      emailRef={emailRef}
      passwordRef={passwordRef}
    />
  );
};

export default LoginForm;
