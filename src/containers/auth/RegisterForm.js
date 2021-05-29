import React, { useState } from 'react';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
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
    console.log('login submit');
  };

  return (
    <AuthForm
      type="register"
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
