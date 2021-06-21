import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { register } from '../../modules/auth';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState(null);
  const [input, setInput] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { user, authError, loading, userLoading } = useSelector(({ auth }) => ({
    user: auth.user.user,
    authError: auth.register.error,
    loading: auth.register.loading,
    userLoading: auth.user.loading,
  }));
  useEffect(() => {
    setError(authError);
    if (authError) setErrorType('email');
  }, [authError]);
  const onChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  const onSubmit = async (e) => {
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
    } else if (
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        email
      ) === false
    ) {
      setError('이메일 형식을 확인해주세요');
      setErrorType('email');
    } else {
      dispatch(register(email, password));
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
      loading={loading}
      user={user}
      userLoading={userLoading}
    />
  );
};

export default RegisterForm;
