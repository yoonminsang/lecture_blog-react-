import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/auth';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ auth }) => ({
    user: auth.user.user,
  }));
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
