import React, { useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
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
    console.log('login submit');
  };

  return (
    <AuthForm
      type="login"
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
